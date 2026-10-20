import { photos } from './archive.js';

export const servicePage = {
  kicker: 'Service',
  title: 'What the car was for.',
  lede: 'Seven kinds of call. One number. No fee.',
};

export const services = [
  {
    id: 'emergency',
    title: 'Emergency Assistance',
    kicker: '01',
    story: [
      'Before 108, the emergency was a private Ambassador and a man who answered at night.',
      'Police stations in Pudukkottai listed his number as 515. The injured, the labouring, the unclaimed dead — the call was the same. He came in his own car, at his own cost, and took them where they had to go.',
      'Fifty-four years. The state ambulance came later. The road had already been his.',
    ],
    images: [photos.ambassadorService, photos.ambassadorWithGanesan, photos.ambassadorSide],
    video: {
      src: 'https://www.youtube.com/embed/JdfTO_eifA4',
      title: 'Service on the road',
    },
    timeline: [
      { year: '1968', text: 'Emergency service begins in the Ambassador.' },
      { year: '108', text: 'A private car becomes the example for a public ambulance.' },
      { year: 'Corona', text: 'Three cars. The country closed. He did not.' },
      { year: 'Now', text: 'The number is still in the stations.' },
    ],
    evidence: [
      {
        href: 'https://www.newindianexpress.com/cities/chennai/2018/Sep/19/on-a-drive-to-save-lives-1874375.html',
        label: 'New Indian Express — On a drive to save lives',
      },
      {
        href: 'https://www.vikatan.com/spiritual/temples/109592-do-you-know-about-515-ganesan-emergency-car-service',
        label: 'Vikatan — Emergency car service',
      },
      {
        href: 'https://www.youtube.com/watch?v=9ICU02uGwwA',
        label: '75 Years of 515 Ganesan — documentary',
      },
    ],
  },
  {
    id: 'pregnant-women',
    title: 'Pregnant Women',
    kicker: '02',
    story: [
      'More than four thousand one hundred women in labour were taken to hospital in his car, free.',
      'There was no waiting for an official ambulance that did not yet exist. There was a white Ambassador, and a man who would not let a birth happen on the tar.',
      'The original record counts them among the work from his nineteenth year to the present.',
    ],
    images: [photos.ambassadorService, photos.ambassadorCollection],
    video: {
      src: 'https://www.youtube.com/embed/9ICU02uGwwA',
      title: 'Documentary record',
    },
    timeline: [
      { year: '1968', text: 'The car begins to carry women in labour.' },
      { year: '1969–present', text: '2,500+ in the early tally; later record: 4,100+.' },
      { year: 'Now', text: 'The same number still answers.' },
    ],
    evidence: [
      {
        href: 'https://www.vikatan.com/literature/arts/137851-story-about-free-car-service-515-ganesan',
        label: 'Vikatan — Free car service',
      },
      {
        href: 'https://www.newindianexpress.com/cities/chennai/2018/Sep/19/on-a-drive-to-save-lives-1874375.html',
        label: 'New Indian Express',
      },
    ],
  },
  {
    id: 'accident-victims',
    title: 'Accident Victims',
    kicker: '03',
    story: [
      'More than four thousand accident victims were lifted from the road and taken to hospital, then — when they could go — taken home.',
      'He did not wait for a siren. He was the siren: a faded Ambassador, a red cross on the glass, 515 above the wipers.',
      'The work did not stop for Corona. Behindwoods recorded the three cars still moving when the country was told to stay still.',
    ],
    images: [photos.ambassadorWithGanesan, photos.ambassadorSide],
    video: {
      src: 'https://www.youtube.com/embed/5JXWzgQVEw0',
      title: 'Behindwoods feature',
    },
    timeline: [
      { year: '1968', text: 'The first wreckage. The first hospital run.' },
      { year: '1969–present', text: '2,000+ in the early tally; later record: 4,000+.' },
      { year: 'Corona', text: 'Three cars on roads that were supposed to be empty.' },
    ],
    evidence: [
      {
        href: 'https://tamil.behindwoods.com/news-shots-tamil-news/tamilnadu/515-ganesan-helping-people-his-three-cars-during-corona.html',
        label: 'Behindwoods — three cars during Corona',
      },
      {
        href: 'https://www.newindianexpress.com/cities/chennai/2018/Sep/19/on-a-drive-to-save-lives-1874375.html',
        label: 'New Indian Express — Drive to save lives',
      },
    ],
  },
  {
    id: 'last-rites',
    title: 'Last Rites',
    kicker: '04',
    story: [
      'Ten thousand one hundred and twenty-two dead carried to burial. More than four thousand one hundred of them without family.',
      'This was the work nobody queued to do. An unclaimed body on a slab, or on the road, and a man who would not leave it there.',
      'He used his own car. He paid his own cost. He took them to the burial ground when there was no one else left to walk behind them.',
    ],
    images: [photos.portraitShop, photos.ambassadorSide],
    video: {
      src: 'https://www.youtube.com/embed/59TbIQ8LjwM',
      title: 'The record on film',
    },
    timeline: [
      { year: '1968', text: 'The first unclaimed body. The first burial.' },
      { year: '54 years', text: '10,122 carried. 4,100+ without family.' },
      { year: 'Now', text: 'The stations still know who to call.' },
    ],
    evidence: [
      {
        href: 'https://www.nakkheeran.in/special-articles/special-article/515-ganesan',
        label: 'Nakkheeran — special article',
      },
      {
        href: 'https://www.puthiyathalaimurai.com/topic/515-ganesan',
        label: 'Puthiya Thalaimurai — 515 Ganesan',
      },
    ],
  },
  {
    id: 'humanitarian',
    title: 'Humanitarian Service',
    kicker: '05',
    story: [
      'The car was not only for the dying. It was for anyone the night had broken.',
      'He collected for strangers’ disasters and handed the money over. He took the injured home after the hospital. He did the work that has no department name.',
      'Eighty-five awards came later. The tiled roof did not get taller.',
    ],
    images: [photos.ambassadorCollection, photos.communityGathering, photos.portraitShop02],
    video: {
      src: 'https://www.youtube.com/embed/secFjTc5k-I',
      title: 'Social service record',
    },
    timeline: [
      { year: '1968–present', text: 'Charity that is just the next journey in the same car.' },
      { year: '2004–2018', text: 'More than one crore rupees collected and given away.' },
      { year: 'Awards', text: '85+ honours. Four cars. All for service.' },
    ],
    evidence: [
      {
        href: 'https://youtu.be/wdOEodfF-uM',
        label: 'Social service — film 2',
      },
      {
        href: 'https://youtu.be/aAu4LatNa5Q',
        label: 'Social service — film 5',
      },
      {
        href: 'https://www.youtube.com/watch?v=DXH0ZkZOFic',
        label: 'IBC Tamil feature',
      },
    ],
  },
  {
    id: 'disaster-relief',
    title: 'Disaster Relief',
    kicker: '06',
    href: '/disaster-relief',
    link: 'Open the disaster record',
    story: [
      'Nagapattinam tsunami, 2004. Kerala floods. Nilgiris. Karnataka. Odisha. Chennai. Cuddalore. Then Gaja.',
      'He collected more than one crore rupees and handed it over. In 2018 the cyclone took his own house in Pudukkottai. He went to Karur anyway and served for forty-five consecutive days.',
      'The News Minute recorded the man who had raised lakhs for other people’s floods, standing in the ruin of his own roof.',
    ],
    images: [photos.ambassadorCollection, photos.communityGathering],
    video: {
      src: 'https://www.youtube.com/embed/9eyacZTpJno',
      title: 'Gaja — on film',
    },
    timeline: [
      { year: '2004', text: 'Tsunami. Nagapattinam. He collects, and he hands it over.' },
      { year: 'Floods', text: 'Kerala, Nilgiris, Karnataka, Odisha, Chennai, Cuddalore.' },
      { year: '2018', text: 'Gaja takes the house. Forty-five days of service in Karur.' },
    ],
    evidence: [
      {
        href: 'https://timesofindia.indiatimes.com/city/trichy/ganesan-sets-out-for-relief-collection-again-this-time-for-flood-hit-nilgiris/articleshow/70683873.cms',
        label: 'Times of India — Nilgiris floods',
      },
      {
        href: 'https://www.thenewsminute.com/tamil-nadu/tn-social-worker-who-raised-lakhs-tsunami-and-flood-victims-loses-home-gaja-92351',
        label: 'The News Minute — Gaja, the house',
      },
      {
        href: 'https://www.puthiyathalaimurai.com/tamilnadu/gaja-strom-is-affected-515-ganesan-in-puthukottai-',
        label: 'Puthiya Thalaimurai — Gaja, Pudukkottai',
      },
      {
        href: 'https://www.nakkheeran.in/24-by-7-news/thamizhagam/pudukottaii-am-dr-515-ganesan-please-help-nilgiris',
        label: 'Nakkheeran — plea for Nilgiris',
      },
      { href: 'https://youtu.be/f4lasJJTyJ4', label: 'Gaja — film 2' },
      { href: 'https://youtu.be/s_5Idhc1oGs', label: 'Gaja — film 3' },
      { href: 'https://youtu.be/xY5i6WJyiMw', label: 'Gaja — film 4' },
    ],
  },
  {
    id: 'red-cross',
    title: 'Red Cross',
    kicker: '07',
    story: [
      'The Indian Red Cross made him a life member. The card travelled with the car.',
      'He was authorised to move on all national highways of India without hindrance — a private man given a public road, because the road was already his work.',
      'The red cross on the windshield was not decoration. It was the same mark the card carried, and the same colour the district learned to look for.',
    ],
    images: [photos.ambassadorSide, photos.ambassadorService, photos.honoraryDoctorate],
    video: {
      src: 'https://www.youtube.com/embed/DXH0ZkZOFic',
      title: 'IBC Tamil feature',
    },
    timeline: [
      { year: 'Life member', text: 'Indian Red Cross card issued to Dr. 515 Ganesan.' },
      { year: 'Highways', text: 'Authorised on every national highway of India.' },
      { year: 'The glass', text: 'The red cross painted where the wipers pass.' },
    ],
    evidence: [
      {
        href: 'https://www.vikatan.com/spiritual/temples/109592-do-you-know-about-515-ganesan-emergency-car-service',
        label: 'Vikatan — emergency car, the mark',
      },
      {
        href: 'https://www.newindianexpress.com/cities/chennai/2018/Sep/19/on-a-drive-to-save-lives-1874375.html',
        label: 'New Indian Express',
      },
    ],
  },
];
