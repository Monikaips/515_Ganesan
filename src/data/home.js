import { photos } from './archive.js';
import { timelinePreview as journeyPreview } from './timeline.js';

export const hero = {
  mark: '515',
  year: '1968',
  lines: ['One man.', 'One car.', 'One number.'],
  number: '515',
  life: 'A life in service',
  counterLine: '54+ years. Zero fee.',
  impactCta: 'See His Impact',
  impactHref: '#impact',
  contactCta: 'Call 515 / Contact',
  contactHref: '/contact',
  discover: 'Scroll',
  discoverHref: '#who-he-is',
  image: photos.portraitShop.src,
  imageAlt: photos.portraitShop.alt,
  cycleMs: 5200,
  cycle: [
    {
      src: photos.portraitShop.src,
      alt: photos.portraitShop.alt,
      position: '50% 18%',
    },
    {
      src: photos.ambassadorService.src,
      alt: photos.ambassadorService.alt,
      position: '50% 42%',
    },
    {
      src: photos.ambassadorWithGanesan.src,
      alt: photos.ambassadorWithGanesan.alt,
      position: '46% 28%',
    },
    {
      src: photos.ambassadorCollection.src,
      alt: photos.ambassadorCollection.alt,
      position: '50% 35%',
    },
    {
      src: photos.ambassadorSide.src,
      alt: photos.ambassadorSide.alt,
      position: '48% 45%',
    },
    {
      src: photos.honoraryDoctorate.src,
      alt: photos.honoraryDoctorate.alt,
      position: '50% 30%',
    },
  ],
};

export const entrance = {
  number: '515',
  lines: ['One man.', 'One car.', 'One number.'],
  caption: 'A life in service since 1968',
  enter: 'Enter',
  videoDelayMs: 5000,
  video: {
    id: '9ICU02uGwwA',
    title: '75 Years of 515 Ganesan',
    href: 'https://www.youtube.com/watch?v=9ICU02uGwwA',
  },
  cycleMs: 400,
  images: [
    photos.portraitShop,
    photos.ambassadorService,
    photos.ambassadorWithGanesan,
    photos.ambassadorCollection,
    photos.ambassadorSide,
    photos.honoraryDoctorate,
    photos.communityGathering,
  ],
};

export const why515 = {
  kicker: 'Why 515?',
  title: 'The number outgrew the man.',
  pullQuote: 'the call was the same',
  paragraphs: [
    'It began as a vehicle number. It ended as a name the whole district could dial.',
    'Police stations listed his mobile as 515. Families in grief asked for 515. Night roads, accident wreckage, unclaimed bodies — the call was the same.',
    'Alangudi Dr. 515 Ganesan. The digits were never a brand. They were a way to find him in time.',
  ],
};

export const beginning = {
  kicker: 'Who He Is',
  title: 'Nineteen years old. An iron shop. Then the road.',
  image: photos.portraitShop02.src,
  imageAlt: '515 Ganesan at his iron shop in Alangudi',
  /* Optional; omit or leave '' to hide the caption under the photo */
  imageCaption: 'Alangudi — Home, iron shop, the number',
  pullStatement:
    'take the dying to hospital, and the dead to burial, in his own car, at his own cost',
  paragraphs: [
    'Alangudi Dr. 515 Ganesan — social worker, iron-shop polymath, and the man a district still dials by number.',
    'He was born in Thuraiyur, near Narthamalai, in Pudukkottai district. He worked metal. He lived in Alangudi.',
    'In 1968 he began to do what no office had asked him to do: take the dying to hospital, and the dead to burial, in his own car, at his own cost.',
    'There was no 108. There was no fleet. There was one young man who would not leave a body on the road.',
  ],
  /* Milestones drawn only from verified text already on this site.
     Place names without a verified year sit in imageCaption, not the year strip. */
  milestones: [
    { year: '1968', text: 'Free emergency service begins' },
    { year: '2004', text: 'Nagapattinam tsunami relief' },
    { year: '2018', text: 'Gaja — house lost, 45 days in Karur' },
    { year: 'Now', text: 'Still answering the call' },
  ],
};

export const ambassador = {
  kicker: 'The Ambassador',
  title: 'Before the ambulance, there was the car.',
  image: photos.ambassadorService.src,
  imageAlt: photos.ambassadorService.alt,
  pullQuote: 'Free, always.',
  paragraphs: [
    'He turned a Hindustan Ambassador into an emergency ward on wheels. Pregnant women. Accident victims. The unclaimed dead.',
    'He drove them to hospital. He drove them home. He drove them to the burial ground when there was no one else left to do it.',
    'The government ambulance came later. The Ambassador had already been running for years — free, always.',
  ],
};

export const lifeOfService = {
  kicker: 'Life of Service',
  title: 'Fifty-four years. One road. No fee.',
  paragraphs: [
    'From 1968 to the present he has kept the same promise: if you call, he comes. Corona did not stop him. Distance did not stop him. His own losses did not stop him.',
    'He buried those who died without family. He carried women in labour. He pulled the injured from the tar and did not wait for a siren that had not been invented yet.',
  ],
};

/*
  Service-volume stats from the verified public record.
  `value` drives count-up; `prefix`/`suffix`/`static` for non-numeric displays.
*/
export const impact = {
  kicker: 'Service on record',
  title: 'What one car could hold.',
  stats: [
    { value: 10122, suffix: '', label: 'Dead carried to burial' },
    { value: 4100, suffix: '+', label: 'Without family' },
    { value: 4100, suffix: '+', label: 'Pregnant women' },
    { value: 4000, suffix: '+', label: 'Accident victims' },
    { value: 85, suffix: '+', label: 'Social worker awards' },
    { value: null, static: '₹1 crore+', label: 'Disaster relief handed over' },
    { value: 45, suffix: '', label: 'Days in Karur after Gaja' },
    { value: 54, suffix: '+', label: 'Years of free service' },
  ],
  note:
    'These figures follow the verified public record of service volume. They are not the same as the district location counts in Our Impact. The 108 ambulance service was inspired by the road he had already been driving.',
};

export const howYouCanHelp = {
  kicker: 'How you can help',
  title: 'Keep the number answering.',
  cards: [
    {
      id: 'support',
      title: 'Support the service',
      body: 'Help sustain the emergency work that has run free for decades. Donation details will be published here once confirmed.',
      cta: 'Contact to support',
      href: '/contact',
      placeholder: 'Donation channel — placeholder until confirmed',
    },
    {
      id: 'volunteer',
      title: 'Volunteer',
      body: 'Offer time, transport, translation, or archive help. Write to the contact listed on this site.',
      cta: 'Offer to help',
      href: '/contact',
      placeholder: null,
    },
    {
      id: 'share',
      title: 'Share his story',
      body: 'Send this record to someone who should know the road he drove — and why the district still dials 515.',
      cta: 'Open archive to share',
      href: '/archive',
      placeholder: null,
    },
  ],
};

export const voices = {
  kicker: 'Voices',
  title: 'What the road remembers.',
  lede: 'Verified quotes from families and the press will appear here. Placeholders mark gaps — do not invent lines.',
  items: [
    {
      id: 'voice-1',
      quote: '[Placeholder — add a verified quote from a family he served.]',
      attribution: 'Family voice — to be confirmed',
      placeholder: true,
    },
    {
      id: 'voice-2',
      quote: '[Placeholder — add a short line from a newspaper or television report already in the archive.]',
      attribution: 'Press — to be confirmed',
      placeholder: true,
    },
    {
      id: 'voice-3',
      quote: 'The digits were never a brand. They were a way to find him in time.',
      attribution: 'From this site’s Why 515 record',
      placeholder: false,
    },
  ],
};

export const contactCta = {
  kicker: 'Contact',
  title: 'Reach the people who keep this record.',
  lede: 'Share a verified photograph, clipping, or memory — or write with a question about his service.',
  link: 'Send a message',
};

export const stickyContact = {
  label: 'Contact 515',
  href: '/contact',
};

export const timelinePreview = {
  kicker: 'The Journey',
  title: 'A life measured in miles, not medals.',
  href: '/journey',
  link: 'Read the full journey',
  stops: journeyPreview.map((entry) => ({
    year: entry.year,
    text: entry.summary,
  })),
};

export const disaster = {
  kicker: 'Disaster Story',
  title: 'The cyclone took the house. Not the work.',
  href: '/disaster-relief',
  link: 'The full relief record',
  exhibit: {
    src: photos.ambassadorCollection.src,
    alt: photos.ambassadorCollection.alt,
    title: 'Relief collection',
    year: null,
  },
  paragraphs: [
    'In 2018, Cyclone Gaja tore through his home in Pudukkottai. He went to Karur anyway. Forty-five consecutive days among people who had lost roofs, fields, and kin.',
    'Before that, and after: Nagapattinam tsunami, Kerala floods, Nilgiris, Karnataka, Odisha, Chennai, Cuddalore. He raised and handed over more than one crore rupees — and kept none of the glory in the house that was no longer there.',
  ],
};

export const worldNoticed = {
  kicker: 'When the world noticed',
  title: 'Press. Television. Documentary. All languages.',
  href: '/archive?tab=news',
  link: 'Explore the archive',
  groups: [
    {
      id: 'press',
      label: 'Press',
      kind: 'press',
      items: ['toi-nilgiris', 'nie-drive', 'bbc-doctorate', 'vikatan-emergency'],
    },
    {
      id: 'television',
      label: 'Television',
      kind: 'video',
      items: ['video-ibc', 'video-behindwoods'],
    },
    {
      id: 'documentary',
      label: 'Documentary',
      kind: 'video',
      items: ['video-documentary'],
    },
  ],
};

export const recognitionPreview = {
  kicker: 'Recognition',
  title: 'Eighty-five awards. One tiled roof.',
  href: '/awards',
  link: 'See the record',
  items: [
    'Indian Red Cross life member — authorised on every national highway.',
    'Doctor of Social Work, awarded for the work, not the title.',
    'More than eighty-five honours. A house of tiles for forty years. Four cars — all for service.',
  ],
};

export const archivePreview = {
  kicker: 'Documentary Archive',
  title: 'What the camera kept.',
  href: '/archive',
  link: 'Open the archive',
  images: [
    photos.ambassadorSide,
    photos.portraitShop02,
    photos.ambassadorCollection,
    photos.honoraryDoctorate,
  ],
};

export const hisVoice = {
  kicker: 'His Voice',
  title: 'The district still knows the number.',
  video: 'https://www.youtube.com/embed/59TbIQ8LjwM',
  caption:
    'No speech was required. The stations had his number. The night had his car. The record is on the road, and on film.',
  href: '/his-voice',
  link: 'His voice',
};

export const family = {
  kicker: 'Family',
  title: 'Five daughters. An iron shop. A life given away.',
  image: photos.communityGathering.src,
  imageAlt: photos.communityGathering.alt,
  paragraphs: [
    'The work was public. The cost was private. Five daughters. A polymath’s iron shop that paid for other people’s emergencies.',
    'For forty years the family lived under a tiled roof while the Ambassador — then four cars — belonged to strangers on the highway.',
  ],
  href: '/family',
  link: 'Beyond 515',
};

export const legacy = {
  kicker: 'Legacy',
  title: 'The siren you hear was once a man in a white car.',
  href: '/legacy',
  link: 'The legacy',
  mark: photos.commemorativeMark,
  paragraphs: [
    '108 is a number the state now owns. 515 is a number a district still remembers as a person.',
    'The road through Alangudi has not closed. Neither has the promise.',
  ],
};

export const footerTagline =
  'The digits were never a brand. They were a way to find him in time.';
