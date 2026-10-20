import { photos } from './archive.js';

export const theMan = {
  hero: {
    kicker: 'The Man',
    title: 'Not a title. A person who answered.',
    image: photos.portraitShop,
  },
  earlyLife: {
    kicker: 'Early life',
    title: 'Thuraiyur. Then Alangudi. Then the iron.',
    image: photos.portraitShop02,
    paragraphs: [
      'He was born in Thuraiyur, near Narthamalai, in Pudukkottai district. Indian. Vallanattu Chettiar. The facts are few because he did not write them for a plaque.',
      'He lived in Alangudi. He worked a polymath’s iron shop. Metal paid for petrol. Petrol paid for other people’s last miles.',
    ],
    facts: [
      { label: 'Birth', value: 'Thuraiyur, near Narthamalai' },
      { label: 'Home', value: 'Alangudi, Pudukkottai' },
      { label: 'Work', value: 'Iron shop' },
    ],
  },
  family: {
    kicker: 'Family',
    title: 'Five daughters. A tiled roof. Four cars that were never theirs.',
    image: photos.communityGathering,
    paragraphs: [
      'The public story is the road. The private story is a house of tiles for forty years, five daughters, and an iron shop that funded strangers’ emergencies.',
      'Their names are not on the windshield. The cost is. While the Ambassador — then four cars — belonged to the highway, the family kept the roof that Gaja later took.',
    ],
  },
  person: {
    kicker: 'The person',
    title: 'He did not wait to be asked by an office.',
    paragraphs: [
      'He is not a department. He is a man who saw a body with no one to claim it and did not drive past.',
      'The iron shop. The lungi. The checkered shirt. The shop with 515 painted on the desk. That is the person. The awards came later, and they did not change the desk.',
    ],
  },
  beginning: {
    kicker: 'The beginning of service',
    title: 'Nineteen. 1968. The first night the car was not his.',
    image: photos.ambassadorWithGanesan,
    paragraphs: [
      'In 1968 he began to take the injured to hospital and the dead to burial in his own Ambassador, at his own cost.',
      'From his nineteenth year the work did not pause: unclaimed corpses, women in labour, wreckage on the tar. Free. The government ambulance had not been invented yet.',
    ],
  },
  philosophy: {
    kicker: 'How he lived it',
    title: 'If you call, he comes.',
    paragraphs: [
      'There is no speech on record that needs inventing. The philosophy is the route: pick them up, take them where they must go, take nothing.',
      'Corona closed the country. Gaja closed the house. He still came. That is the whole of it.',
    ],
  },
  memories: {
    kicker: 'What remains at home',
    title: 'The district remembers a number. The house remembers a man.',
    image: photos.communityGathering,
    paragraphs: [
      'We do not have the daughters’ letters here. We have the public cost of a private life: forty years under tile, five girls, an iron shop, four cars that slept on other people’s nights.',
      'When more family photographs arrive, they belong in the archive — not as decoration, as the other half of the story.',
    ],
  },
};
