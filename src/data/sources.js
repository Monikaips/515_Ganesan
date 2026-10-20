/*
  Historical identities — newspapers, television, organizations.

  Drop an official monochrome mark in public/archive/marks/{id}.svg
  and set `logo` to that path. Until then the masthead is the name itself.
  Do not use Font Awesome as a stand-in for a source.
*/

export const sources = {
  'times-of-india': {
    id: 'times-of-india',
    kind: 'press',
    name: 'The Times of India',
    short: 'TOI',
    masthead: ['The Times', 'of India'],
    logo: null,
  },
  'new-indian-express': {
    id: 'new-indian-express',
    kind: 'press',
    name: 'The New Indian Express',
    short: 'NIE',
    masthead: ['The New', 'Indian Express'],
    logo: null,
  },
  'the-news-minute': {
    id: 'the-news-minute',
    kind: 'press',
    name: 'The News Minute',
    short: 'TNM',
    masthead: ['The News', 'Minute'],
    logo: null,
  },
  vikatan: {
    id: 'vikatan',
    kind: 'press',
    name: 'Vikatan',
    short: 'Vikatan',
    masthead: ['Vikatan'],
    logo: null,
  },
  nakkheeran: {
    id: 'nakkheeran',
    kind: 'press',
    name: 'Nakkheeran',
    short: 'Nakkheeran',
    masthead: ['Nakkheeran'],
    logo: null,
  },
  behindwoods: {
    id: 'behindwoods',
    kind: 'television',
    name: 'Behindwoods',
    short: 'Behindwoods',
    masthead: ['Behindwoods'],
    logo: null,
  },
  'puthiya-thalaimurai': {
    id: 'puthiya-thalaimurai',
    kind: 'press',
    name: 'Puthiya Thalaimurai',
    short: 'PT',
    masthead: ['Puthiya', 'Thalaimurai'],
    logo: null,
  },
  'bbc-tamil': {
    id: 'bbc-tamil',
    kind: 'press',
    name: 'BBC News Tamil',
    short: 'BBC Tamil',
    masthead: ['BBC', 'Tamil'],
    logo: null,
  },
  tamiljanam: {
    id: 'tamiljanam',
    kind: 'press',
    name: 'Tamil Janam',
    short: 'Tamil Janam',
    masthead: ['Tamil', 'Janam'],
    logo: null,
  },
  drivespark: {
    id: 'drivespark',
    kind: 'press',
    name: 'DriveSpark',
    short: 'DriveSpark',
    masthead: ['DriveSpark'],
    logo: null,
  },
  'hindu-tamil': {
    id: 'hindu-tamil',
    kind: 'press',
    name: 'Hindu Tamil',
    short: 'Hindu Tamil',
    masthead: ['Hindu', 'Tamil'],
    logo: null,
  },
  'ibc-tamil': {
    id: 'ibc-tamil',
    kind: 'television',
    name: 'IBC Tamil',
    short: 'IBC',
    masthead: ['IBC Tamil'],
    logo: null,
  },
  'red-cross': {
    id: 'red-cross',
    kind: 'organization',
    name: 'Indian Red Cross Society',
    short: 'Red Cross',
    masthead: ['Indian Red Cross', 'Society'],
    logo: null,
    mark: 'cross',
    association: 'Life member. Authorised on every national highway.',
  },
  'bharath-university': {
    id: 'bharath-university',
    kind: 'organization',
    name: 'Bharath University, Karnataka',
    short: 'Bharath University',
    masthead: ['Bharath', 'University'],
    logo: null,
    association: 'Doctor of Social Work, awarded for the work.',
  },
};

export function sourceById(id) {
  return sources[id] ?? null;
}

export function sourceByName(name) {
  if (!name) return null;
  const needle = name.toLowerCase();
  return (
    Object.values(sources).find(
      (item) =>
        item.name.toLowerCase() === needle ||
        item.short.toLowerCase() === needle,
    ) ?? null
  );
}
