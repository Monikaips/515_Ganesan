import { photos } from './archive.js';

export const familyPage = {
  kicker: 'Beyond 515',
  title: 'The number was public. The house was not.',
  lede: 'Five daughters. An iron shop. A tiled roof for forty years.',
};

export const familyChapters = [
  {
    id: 'grandfather',
    kicker: 'The Grandfather',
    title: 'The man the district called 515 was also someone’s thatha.',
    story: [
      'This page is for the person behind the windshield: the grandfather, the father of five daughters, the man who paid for other people’s emergencies from an iron shop.',
      'The public record does not name the children. It should not invent them. When the family wishes to be named, their names belong here.',
    ],
    image: photos.portraitShop,
    needed: [
      {
        type: 'image',
        file: 'public/archive/family/grandfather-01.jpg',
        note: 'A family photograph of him as grandfather — original only.',
      },
      {
        type: 'quote',
        file: 'src/data/family.js → grandfather.quote',
        note: 'A line from a grandchild or daughter, if they offer it.',
      },
    ],
  },
  {
    id: 'memories',
    kicker: 'Family Memories',
    title: 'What the house remembers.',
    story: [
      'The tiled roof. The cars that did not sleep at home. The nights the number rang.',
      'These memories are not ours to write. They are the family’s to give.',
    ],
    image: null,
    needed: [
      {
        type: 'image',
        file: 'public/archive/family/memory-01.jpg',
        note: 'A home photograph from the family’s own album.',
      },
      {
        type: 'image',
        file: 'public/archive/family/memory-02.jpg',
        note: 'A second memory — festival, meal, ordinary day.',
      },
      {
        type: 'quote',
        file: 'src/data/family.js → memories.quote',
        note: 'A remembered sentence. Written by them, or recorded with consent.',
      },
    ],
  },
  {
    id: 'photographs',
    kicker: 'Photographs',
    title: 'The album that is not the press.',
    story: [
      'One gathering is already in the archive. The rest of the album is still at home.',
    ],
    image: photos.communityGathering,
    needed: [
      {
        type: 'image',
        file: 'public/archive/family/album-01.jpg',
        note: 'Family album scan 1.',
      },
      {
        type: 'image',
        file: 'public/archive/family/album-02.jpg',
        note: 'Family album scan 2.',
      },
      {
        type: 'image',
        file: 'public/archive/family/album-03.jpg',
        note: 'Family album scan 3.',
      },
    ],
  },
  {
    id: 'stories',
    kicker: 'Stories',
    title: 'Told at home, not on the highway.',
    story: [
      'If a classmate, a daughter, or a neighbour has a story that is true and given freely, it lives here. Not a legend. A story.',
    ],
    image: null,
    needed: [
      {
        type: 'quote',
        file: 'src/data/family.js → stories[]',
        note: 'Short true stories. Who told it. When. No invention.',
      },
      {
        type: 'audio',
        file: 'public/archive/family/story-01.mp3',
        note: 'Spoken memory, if someone will record it.',
      },
    ],
  },
  {
    id: 'next-generation',
    kicker: 'The Next Generation',
    title: 'What they keep. What they change.',
    story: [
      'The 108 siren is the state’s now. The name 515 is still a family’s.',
      'This chapter waits for the next generation to say what they inherited — and what they will not.',
    ],
    image: null,
    needed: [
      {
        type: 'image',
        file: 'public/archive/family/next-generation-01.jpg',
        note: 'A photograph of the next generation, only with consent.',
      },
      {
        type: 'quote',
        file: 'src/data/family.js → nextGeneration.quote',
        note: 'Their words about the number, the car, the man.',
      },
      {
        type: 'video',
        file: 'public/archive/family/next-generation.mp4',
        note: 'Optional: a short recording from a grandchild or daughter.',
      },
    ],
  },
];
