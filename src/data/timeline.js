import { photos } from './archive.js';

export const timeline = [
  {
    id: '1968',
    year: '1968',
    title: 'The Beginning',
    summary: 'Emergency service begins. One man. One Ambassador.',
    description:
      'At nineteen he put the dying and the dead into his own car. There was no 108. There was no fee. Alangudi had a number it did not yet know it would call.',
    image: photos.portraitShop.src,
    category: 'service',
    preview: true,
  },
  {
    id: '1969',
    year: '1969',
    title: 'The Road Becomes Work',
    summary: 'The service continues from his nineteenth year.',
    description:
      'The original record dates the work from 1969: more than five thousand unclaimed dead, three thousand more burials, twenty-five hundred pregnant women, two thousand accident victims — all free, all in the Ambassador.',
    image: photos.ambassadorWithGanesan.src,
    category: 'service',
    preview: false,
  },
  {
    id: '108',
    year: '108',
    title: 'A Car Becomes an Ambulance',
    summary: 'A private car becomes the example for a public ambulance.',
    description:
      'He ran a free Ambassador ambulance for fifty-four years. The state 108 service came later. His mobile number was already listed in the police stations of the district.',
    image: photos.ambassadorService.src,
    category: 'ambulance',
    preview: true,
  },
  {
    id: '2004',
    year: '2004',
    title: 'Tsunami Relief',
    summary: 'Nagapattinam. He collects, and he hands it over.',
    description:
      'After the 2004 tsunami he raised money for the coast and did not keep it. The same pattern followed: Kerala floods, Nilgiris, Karnataka, Odisha, Chennai, Cuddalore — more than one crore rupees passed through his hands to people who had lost more than he had.',
    image: photos.ambassadorCollection.src,
    category: 'disasters',
    preview: true,
  },
  {
    id: 'red-cross',
    year: 'Red Cross',
    title: 'Life Member',
    summary: 'Authorised on every national highway.',
    description:
      'The Indian Red Cross issued him a life membership. The card travelled with the car. He was permitted to move on all national highways of India without hindrance — a private man given a public road.',
    image: photos.ambassadorSide.src,
    category: 'awards',
    preview: false,
  },
  {
    id: '2018',
    year: '2018',
    title: 'Gaja',
    summary: 'The cyclone takes the house. He keeps driving for forty-five days.',
    description:
      'Cyclone Gaja tore through Pudukkottai. His home went with it. He went to Karur anyway and served for forty-five consecutive days among people who had lost roofs, fields, and kin.',
    image: photos.communityGathering.src,
    category: 'disasters',
    preview: true,
  },
  {
    id: 'corona',
    year: 'Corona',
    title: 'The Years That Closed the Roads',
    summary: 'The work did not stop when the country stopped.',
    description:
      'When movement was forbidden, he still moved the sick and the dead. Three cars. No fee. The same number.',
    image: photos.ambassadorWithGanesan.src,
    category: 'service',
    preview: false,
  },
  {
    id: 'doctorate',
    year: 'Doctorate',
    title: 'Doctor of Social Work',
    summary: 'A title for the work, not the other way around.',
    description:
      'Bharath University in Karnataka awarded him a doctorate in social work. He stood for the photograph in the gown, the Ambassadors behind him, still marked 515.',
    image: photos.honoraryDoctorate.src,
    category: 'awards',
    preview: false,
  },
  {
    id: 'now',
    year: 'Now',
    title: 'The Number Is Still in the Stations',
    summary: 'The road is still his.',
    description:
      'Eighty-five awards. Four cars for service. Five daughters. A tiled roof for forty years. The district still knows the number.',
    image: photos.portraitShop02.src,
    category: 'service',
    preview: true,
  },
];

export const timelinePreview = timeline.filter((entry) => entry.preview);
