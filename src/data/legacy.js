import { photos } from './archive.js';

export const legacyPage = {
  kicker: 'Legacy',
  title: 'The siren you hear was once a man in a white car.',
  lede: '108 is the state’s number. 515 is still a person.',
  mark: photos.commemorativeMark,
  image: photos.ambassadorService,
};

export const legacyChapters = [
  {
    id: '108',
    kicker: '108',
    title: 'The ambulance that came after him.',
    story: [
      'He ran a free Ambassador ambulance for fifty-four years. The government 108 service came later.',
      'The original record says the public ambulance was inspired by the road he had already been driving. That claim belongs to the record, and to the film, not to a slogan.',
    ],
    image: photos.ambassadorWithGanesan,
    needed: [
      {
        type: 'image',
        file: 'public/archive/documents/108-connection.jpg',
        note: 'Any official or press document that names his work beside 108.',
      },
      {
        type: 'quote',
        file: 'src/data/legacy.js → 108.quote',
        note: 'A verified line about 108 — his, or a public record. Not invented.',
      },
    ],
  },
  {
    id: 'number',
    kicker: 'The number',
    title: 'Still in the stations.',
    story: [
      'Police stations in the district listed his mobile as 515. Families asked for 515. The digits outgrew the plate and became a name.',
      'As long as someone still says the number and means the man, the legacy is not a museum label. It is a call.',
    ],
    image: photos.ambassadorSide,
    needed: [
      {
        type: 'image',
        file: 'public/archive/documents/station-listing.jpg',
        note: 'If a station diary or listing of 515 exists, photograph it.',
      },
      {
        type: 'quote',
        file: 'src/data/legacy.js → number.quote',
        note: 'Someone who still uses the number — if they will say so.',
      },
    ],
  },
  {
    id: 'road',
    kicker: 'The road',
    title: 'Alangudi has not closed.',
    story: [
      'The shop. The desk with 515 painted on it. The cars. The tiled roof that Gaja took.',
      'The road through Alangudi is still there. Whether the work continues in the same way is for the living to say.',
    ],
    image: photos.portraitShop,
    needed: [
      {
        type: 'image',
        file: 'public/archive/portraits/alangudi-now.jpg',
        note: 'A recent photograph of the shop, the road, or the house as it is now.',
      },
      {
        type: 'quote',
        file: 'src/data/legacy.js → road.quote',
        note: 'A neighbour or family line about whether the road is still answered.',
      },
    ],
  },
  {
    id: 'continues',
    kicker: 'What continues',
    title: 'Not a statue. A practice.',
    story: [
      'Eighty-five awards will yellow. The press will archive itself. The only legacy that matters is whether someone still stops for the unclaimed, the labouring, the wrecked.',
      'If the next generation keeps any of that, it belongs on this page. If they keep only the name, that belongs here too.',
    ],
    image: photos.commemorativeMark,
    needed: [
      {
        type: 'image',
        file: 'public/archive/family/legacy-continues-01.jpg',
        note: 'Photograph of whatever continues — a car, a call, a person.',
      },
      {
        type: 'video',
        file: 'public/archive/media/legacy-message.mp4',
        note: 'A recording about what should remain.',
      },
      {
        type: 'quote',
        file: 'src/data/legacy.js → continues.quote',
        note: 'The last verified word. Leave empty until it is given.',
      },
    ],
  },
];
