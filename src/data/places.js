/*
  Places named in the verified record of his service and relief.
  Map links open Google Maps search for that place — not invented pins.
*/

export const placesPage = {
  kicker: 'The map',
  title: 'Every road the number answered.',
  lede: 'From Alangudi outward. Click a place to open it on the map.',
};

export const homeBase = {
  id: 'alangudi',
  name: 'Alangudi',
  district: 'Pudukkottai',
  state: 'Tamil Nadu',
  role: 'Home. The shop. The number.',
  lat: 10.3606,
  lng: 78.9849,
  maps: 'https://www.google.com/maps/search/?api=1&query=Alangudi+Pudukkottai+Tamil+Nadu',
};

export const servicePlaces = [
  {
    id: 'alangudi',
    name: 'Alangudi',
    region: 'Pudukkottai',
    kind: 'home',
    note: 'The iron shop. The Ambassador. The stations that still list 515.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Alangudi+Pudukkottai',
  },
  {
    id: 'thuraiyur',
    name: 'Thuraiyur',
    region: 'near Narthamalai, Pudukkottai',
    kind: 'origin',
    note: 'Where he was born.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Thuraiyur+Narthamalai+Pudukkottai',
  },
  {
    id: 'nagapattinam',
    name: 'Nagapattinam',
    region: 'Tamil Nadu',
    kind: 'relief',
    note: '2004 tsunami relief.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nagapattinam+Tamil+Nadu',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    region: 'Palakkad and beyond',
    kind: 'relief',
    note: '2018 floods — collection handed over.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Palakkad+Kerala',
  },
  {
    id: 'nilgiris',
    name: 'Nilgiris',
    region: 'Tamil Nadu',
    kind: 'relief',
    note: 'Flood relief collection.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Nilgiris+Tamil+Nadu',
  },
  {
    id: 'chennai',
    name: 'Chennai',
    region: 'Tamil Nadu',
    kind: 'relief',
    note: 'Flood relief.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Chennai+Tamil+Nadu',
  },
  {
    id: 'cuddalore',
    name: 'Cuddalore',
    region: 'Tamil Nadu',
    kind: 'relief',
    note: 'Flood relief.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Cuddalore+Tamil+Nadu',
  },
  {
    id: 'karur',
    name: 'Karur',
    region: 'Tamil Nadu',
    kind: 'relief',
    note: 'Gaja 2018 — forty-five consecutive days.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Karur+Tamil+Nadu',
  },
  {
    id: 'pudukkottai',
    name: 'Pudukkottai',
    region: 'Tamil Nadu',
    kind: 'disaster',
    note: 'Gaja took the house. The work continued.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Pudukkottai+Tamil+Nadu',
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    region: 'India',
    kind: 'relief',
    note: 'Flood relief. Bharath University doctorate.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Bengaluru+Karnataka',
  },
  {
    id: 'odisha',
    name: 'Odisha',
    region: 'India',
    kind: 'relief',
    note: 'Flood relief.',
    maps: 'https://www.google.com/maps/search/?api=1&query=Odisha+India',
  },
];

export const featuredHelpLink = {
  href: 'https://share.google/HkX6aziK9qZIJeKBX',
  kicker: 'Read this',
  title: 'Help the man who helped everyone',
  source: 'Puthiya Thalaimurai',
  year: 2018,
  note: 'After Gaja took the house, he still collected for others. This is the story the district shared.',
};
