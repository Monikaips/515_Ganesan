import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const geo = JSON.parse(fs.readFileSync(path.join(root, 'india-states.geojson'), 'utf8'));

/** States with verified out-of-TN relief in this archive */
const ACTIVE = new Set(['kerala', 'karnataka', 'odisha']);

const NAME_TO_ID = {
  Kerala: 'kerala',
  Karnataka: 'karnataka',
  Orissa: 'odisha',
  Odisha: 'odisha',
  'Tamil Nadu': 'tamil-nadu',
  'Andhra Pradesh': 'andhra-pradesh',
  'Andaman and Nicobar': 'andaman-and-nicobar',
  'Arunachal Pradesh': 'arunachal-pradesh',
  Assam: 'assam',
  Bihar: 'bihar',
  Chandigarh: 'chandigarh',
  Chhattisgarh: 'chhattisgarh',
  'Dadra and Nagar Haveli': 'dadra-and-nagar-haveli',
  'Daman and Diu': 'daman-and-diu',
  Delhi: 'delhi',
  Goa: 'goa',
  Gujarat: 'gujarat',
  Haryana: 'haryana',
  'Himachal Pradesh': 'himachal-pradesh',
  'Jammu and Kashmir': 'jammu-and-kashmir',
  Jharkhand: 'jharkhand',
  Lakshadweep: 'lakshadweep',
  'Madhya Pradesh': 'madhya-pradesh',
  Maharashtra: 'maharashtra',
  Manipur: 'manipur',
  Meghalaya: 'meghalaya',
  Mizoram: 'mizoram',
  Nagaland: 'nagaland',
  Puducherry: 'puducherry',
  Punjab: 'punjab',
  Rajasthan: 'rajasthan',
  Sikkim: 'sikkim',
  Tripura: 'tripura',
  'Uttar Pradesh': 'uttar-pradesh',
  Uttaranchal: 'uttarakhand',
  Uttarakhand: 'uttarakhand',
  'West Bengal': 'west-bengal',
};

const DISPLAY = {
  kerala: 'Kerala',
  karnataka: 'Karnataka',
  odisha: 'Odisha',
  'tamil-nadu': 'Tamil Nadu',
  uttarakhand: 'Uttarakhand',
};

function flattenCoords(geom) {
  const rings = [];
  if (geom.type === 'Polygon') {
    for (const ring of geom.coordinates) rings.push(ring);
  } else if (geom.type === 'MultiPolygon') {
    for (const poly of geom.coordinates) {
      for (const ring of poly) rings.push(ring);
    }
  }
  return rings;
}

function simplify(ring, step) {
  if (ring.length <= 10) return ring;
  const out = [];
  for (let i = 0; i < ring.length; i += step) out.push(ring[i]);
  const last = ring[ring.length - 1];
  const prev = out[out.length - 1];
  if (!prev || prev[0] !== last[0] || prev[1] !== last[1]) out.push(last);
  return out;
}

function ringArea(ring) {
  let a = 0;
  for (let i = 0; i < ring.length - 1; i += 1) {
    a += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
  }
  return Math.abs(a / 2);
}

function centroid(ring) {
  let a = 0;
  let cx = 0;
  let cy = 0;
  for (let i = 0; i < ring.length - 1; i += 1) {
    const cross = ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
    a += cross;
    cx += (ring[i][0] + ring[i + 1][0]) * cross;
    cy += (ring[i][1] + ring[i + 1][1]) * cross;
  }
  a *= 0.5;
  if (Math.abs(a) > 1e-12) return [cx / (6 * a), cy / (6 * a)];
  return [
    ring.reduce((s, p) => s + p[0], 0) / ring.length,
    ring.reduce((s, p) => s + p[1], 0) / ring.length,
  ];
}

let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;
const collected = [];

for (const f of geo.features) {
  const raw = f.properties.NAME_1;
  const id =
    NAME_TO_ID[raw] ||
    raw
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  // Skip tiny island territories that clutter a national overview
  if (id === 'lakshadweep' || id === 'andaman-and-nicobar') continue;

  const active = ACTIVE.has(id);
  const context = id === 'tamil-nadu';
  const step = active || context ? 5 : 12;
  let rings = flattenCoords(f.geometry).map((r) => simplify(r, step));

  const areas = rings.map(ringArea);
  const maxArea = Math.max(...areas, 0);
  rings = rings.filter((ring, i) => areas[i] >= maxArea * 0.015 && areas[i] > 1e-8);
  if (!rings.length) continue;

  for (const ring of rings) {
    for (const [x, y] of ring) {
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  let best = rings[0];
  let bestArea = 0;
  for (const ring of rings) {
    const a = ringArea(ring);
    if (a > bestArea) {
      bestArea = a;
      best = ring;
    }
  }

  const [cx, cy] = centroid(best);
  collected.push({
    id,
    name: DISPLAY[id] || raw,
    rings,
    cx,
    cy,
    active,
    context,
  });
}

const pad = 16;
const width = 520;
const spanX = maxX - minX;
const spanY = maxY - minY;
/* Fit to width so the landmass fills the frame; height follows content (top-aligned). */
const scale = (width - pad * 2) / spanX;
const height = Math.ceil(pad * 2 + spanY * scale);

function project([lng, lat]) {
  const x = pad + (lng - minX) * scale;
  const y = pad + (maxY - lat) * scale;
  return [Number(x.toFixed(2)), Number(y.toFixed(2))];
}

const states = collected.map((s) => {
  const path = s.rings
    .map((ring) => {
      return (
        ring
          .map((pt, i) => {
            const [x, y] = project(pt);
            return `${i === 0 ? 'M' : 'L'}${x} ${y}`;
          })
          .join('') + 'Z'
      );
    })
    .join('');
  const [mx, my] = project([s.cx, s.cy]);
  return {
    id: s.id,
    name: s.name,
    path,
    label: { x: mx, y: my },
    active: s.active,
    context: s.context,
  };
});

const body = `/*
  Full India state map from open GeoJSON (geohacker/india).
  Credit: state boundaries adapted from open India GeoJSON (not shown in UI).
  Active relief states: Kerala, Karnataka, Odisha. Tamil Nadu marked as context.
  Generated by scripts/build-india-map.mjs. Do not hand-edit paths.
*/

export const indiaStatesMap = {
  viewBox: '0 0 ${width} ${height}',
  width: ${width},
  height: ${height},
  states: ${JSON.stringify(states, null, 2)},
};
`;

const dest = path.join(root, 'src', 'data', 'indiaStatesMap.js');
fs.writeFileSync(dest, body);
console.log(`wrote ${states.length} states → ${dest} (${body.length} chars)`);
console.log(
  'active:',
  states.filter((s) => s.active).map((s) => s.name).join(', '),
);
