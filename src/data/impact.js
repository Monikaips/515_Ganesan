/*
  Geographic impact — Tamil Nadu districts with verified place records.

  Counting rules (single source of truth):
  - Each entry in `impactActivities` is one unique documented location / named activity.
  - District counts = number of those entries with that districtId (never double-counted).
  - Totals.locations = impactActivities.length; totals.districts = distinct districtIds.
  - These are NOT beneficiary counts (people helped). See home.js → impact.stats for
    public-record service tallies, which are a separate category.
  - Out-of-state work lives in `beyondTamilNadu` and must not appear on the TN map.
  - Do not invent per-district beneficiary tallies, pins, or exact coordinates.
*/

import { photos } from './archive.js';
import { servicePlaces } from './places.js';

export const impactMapPage = {
  kicker: 'Our Impact',
  title: 'Our Impact',
  lede:
    "Explore the places where Dr. 515 Ganesan's service and humanitarian work has made a difference. Counts are documented locations named in the verified record — not estimates of every call answered.",
  totalLabel: 'Documented locations',
  districtsLabel: 'Districts on record',
  emptyDetail:
    'No place-level record is attached to this district yet. Leave the gap rather than invent a count.',
  beyondTitle: 'Beyond Tamil Nadu',
  beyondNote:
    'Relief collections also name Kerala, Karnataka, and Odisha. Those roads sit outside the Tamil Nadu district map.',
  beyondSelectHint: 'Select a state from the list or the map.',
  // Map boundary credit (not shown in UI): TN districts from open Tamil Nadu GeoJSON;
  // India states from open India GeoJSON (geohacker/india).
  selectHint: 'Select a district from the list or the map to see places, photographs, and story links.',
  tabs: [
    { id: 'tamil-nadu', label: 'Tamil Nadu' },
    { id: 'beyond', label: 'Beyond Tamil Nadu' },
  ],
  kindLabels: {
    home: 'Home',
    origin: 'Origin',
    disaster: 'Disaster relief',
    relief: 'Relief work',
  },
};

/*
  Canonical TN activities — each id appears once.
  placeId links to servicePlaces in places.js when the same site is listed there.
*/
export const impactActivities = [
  {
    id: 'alangudi-home',
    districtId: 'pudukkottai',
    placeId: 'alangudi',
    name: 'Alangudi',
    kind: 'home',
    note: 'The iron shop. The Ambassador. The stations that still list 515.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Alangudi+Pudukkottai',
    href: '/the-man',
    archiveHref: '/archive?tab=photos',
    photo: photos.portraitShop,
  },
  {
    id: 'thuraiyur-origin',
    districtId: 'pudukkottai',
    placeId: 'thuraiyur',
    name: 'Thuraiyur',
    kind: 'origin',
    note: 'Where he was born — near Narthamalai.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Thuraiyur+Narthamalai+Pudukkottai',
    href: '/the-man',
    archiveHref: null,
    photo: null,
  },
  {
    id: 'pudukkottai-gaja',
    districtId: 'pudukkottai',
    placeId: 'pudukkottai',
    name: 'Pudukkottai',
    kind: 'disaster',
    note: 'Gaja took the house. The work continued.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Pudukkottai+Tamil+Nadu',
    href: '/disaster-relief',
    archiveHref: '/archive?tab=videos',
    photo: photos.ambassadorCollection,
    evidence: [
      {
        href: 'https://www.thenewsminute.com/tamil-nadu/tn-social-worker-who-raised-lakhs-tsunami-and-flood-victims-loses-home-gaja-92351',
        label: 'The News Minute — loses home in Gaja',
      },
    ],
  },
  {
    id: 'nagapattinam-tsunami',
    districtId: 'nagapattinam',
    placeId: 'nagapattinam',
    name: 'Nagapattinam',
    kind: 'relief',
    note: '2004 tsunami relief — named in the public record.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nagapattinam+Tamil+Nadu',
    href: '/disaster-relief',
    archiveHref: '/archive?tab=news',
    photo: null,
    evidence: [
      {
        href: 'https://www.thenewsminute.com/tamil-nadu/tn-social-worker-who-raised-lakhs-tsunami-and-flood-victims-loses-home-gaja-92351',
        label: 'The News Minute — tsunami and flood work',
      },
    ],
  },
  {
    id: 'nilgiris-floods',
    districtId: 'nilgiris',
    placeId: 'nilgiris',
    name: 'Nilgiris',
    kind: 'relief',
    note: 'Flood relief collection — Times of India, Nakkheeran.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nilgiris+Tamil+Nadu',
    href: '/disaster-relief',
    archiveHref: '/archive?tab=news',
    photo: null,
    evidence: [
      {
        href: 'https://timesofindia.indiatimes.com/city/trichy/ganesan-sets-out-for-relief-collection-again-this-time-for-flood-hit-nilgiris/articleshow/70683873.cms',
        label: 'Times of India — Nilgiris floods',
      },
      {
        href: 'https://www.nakkheeran.in/24-by-7-news/thamizhagam/pudukottaii-am-dr-515-ganesan-please-help-nilgiris',
        label: 'Nakkheeran — plea for Nilgiris',
      },
    ],
  },
  {
    id: 'chennai-floods',
    districtId: 'chennai',
    placeId: 'chennai',
    name: 'Chennai',
    kind: 'relief',
    note: 'Flood relief — named in the original account.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Chennai+Tamil+Nadu',
    href: '/disaster-relief',
    archiveHref: '/archive?tab=news',
    photo: null,
  },
  {
    id: 'cuddalore-floods',
    districtId: 'cuddalore',
    placeId: 'cuddalore',
    name: 'Cuddalore',
    kind: 'relief',
    note: 'Flood relief — named in the original account.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Cuddalore+Tamil+Nadu',
    href: '/disaster-relief',
    archiveHref: '/archive?tab=news',
    photo: null,
  },
  {
    id: 'karur-gaja',
    districtId: 'karur',
    placeId: 'karur',
    name: 'Karur',
    kind: 'relief',
    note: 'Gaja 2018 — forty-five consecutive days of service.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Karur+Tamil+Nadu',
    href: '/disaster-relief',
    archiveHref: '/archive?tab=videos',
    photo: photos.ambassadorCollection,
    evidence: [
      {
        href: 'https://www.puthiyathalaimurai.com/tamilnadu/gaja-strom-is-affected-515-ganesan-in-puthukottai-',
        label: 'Puthiya Thalaimurai — Gaja, Pudukkottai',
      },
    ],
  },
];

/** Out-of-state documented relief — plotted on the India states map, not TN districts. */
export const beyondTamilNadu = [
  {
    id: 'kerala-floods',
    stateId: 'kerala',
    placeId: 'kerala',
    name: 'Kerala',
    year: '2018',
    note: 'Floods — collection handed over. Named in the original account.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Palakkad+Kerala',
    href: '/disaster-relief',
    evidence: [
      {
        href: 'https://www.newindianexpress.com/cities/chennai/2018/Sep/19/on-a-drive-to-save-lives-1874375.html',
        label: 'The New Indian Express — on a drive to save lives (Kerala flood)',
      },
    ],
  },
  {
    id: 'karnataka-floods',
    stateId: 'karnataka',
    placeId: 'karnataka',
    name: 'Karnataka',
    year: 'On record',
    note: 'Flood relief. Bharath University doctorate also recorded here.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Bengaluru+Karnataka',
    href: '/disaster-relief',
  },
  {
    id: 'odisha-floods',
    stateId: 'odisha',
    placeId: 'odisha',
    name: 'Odisha',
    year: 'On record',
    note: 'Flood relief — named in the original account.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Odisha+India',
    href: '/disaster-relief',
  },
];

/** State ids with at least one verified out-of-TN activity. */
export const activeStateIds = new Set(beyondTamilNadu.map((a) => a.stateId));

export function getBeyondState(stateId) {
  return beyondTamilNadu.find((s) => s.stateId === stateId) ?? null;
}

const DISTRICT_LABELS = {
  pudukkottai: 'Pudukkottai',
  nagapattinam: 'Nagapattinam',
  nilgiris: 'Nilgiris',
  chennai: 'Chennai',
  cuddalore: 'Cuddalore',
  karur: 'Karur',
};

function assertNoDuplicateIds(items) {
  const seen = new Set();
  for (const item of items) {
    if (seen.has(item.id)) {
      throw new Error(`Duplicate impact activity id: ${item.id}`);
    }
    seen.add(item.id);
  }
}

assertNoDuplicateIds(impactActivities);
assertNoDuplicateIds(beyondTamilNadu);

/** Unique documented activities per district — derived, never double-counted. */
export function getImpactDistricts() {
  const byDistrict = new Map();

  for (const activity of impactActivities) {
    const existing = byDistrict.get(activity.districtId);
    if (existing) {
      existing.activities.push(activity);
      existing.count += 1;
    } else {
      byDistrict.set(activity.districtId, {
        id: activity.districtId,
        name: DISTRICT_LABELS[activity.districtId] || activity.districtId,
        count: 1,
        activities: [activity],
      });
    }
  }

  return [...byDistrict.values()].sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name);
  });
}

export function getImpactTotals() {
  const districts = getImpactDistricts();
  return {
    locations: impactActivities.length,
    districts: districts.length,
    beyond: beyondTamilNadu.length,
  };
}

export function getDistrictImpact(districtId) {
  return getImpactDistricts().find((d) => d.id === districtId) ?? null;
}

/** District ids that have at least one verified activity. */
export const activeDistrictIds = new Set(impactActivities.map((a) => a.districtId));

/** Sanity: every placeId still exists in servicePlaces when set. */
export function validateImpactAgainstPlaces() {
  const placeIds = new Set(servicePlaces.map((p) => p.id));
  return [
    ...impactActivities,
    ...beyondTamilNadu,
  ]
    .filter((a) => a.placeId && !placeIds.has(a.placeId))
    .map((a) => a.placeId);
}
