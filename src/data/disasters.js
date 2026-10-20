export const disasterPage = {
  kicker: 'Disaster Relief',
  title: 'He collected. He handed it over. Then he drove.',
  lede: 'Tsunami. Floods. Kerala. Gaja. The rest of the water and the wind.',
};

export const disasters = [
  {
    id: 'tsunami',
    year: '2004',
    title: 'Tsunami',
    place: 'Nagapattinam',
    story: [
      'After the Indian Ocean tsunami he raised money for the coast and did not keep it.',
      'Nagapattinam is the place the record names.',
    ],
    images: [],
    video: null,
    quote: null,
    evidence: [
      {
        href: 'https://www.thenewsminute.com/tamil-nadu/tn-social-worker-who-raised-lakhs-tsunami-and-flood-victims-loses-home-gaja-92351',
        label: 'The News Minute — tsunami and flood work, later the house',
      },
    ],
    needed: [
      {
        type: 'image',
        file: 'public/archive/disasters/tsunami-nagapattinam-01.jpg',
        note: 'Original still from 2004 tsunami relief — him, the car, or the collection.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/tsunami-nagapattinam-02.jpg',
        note: 'Second original still. Coast, relief, or the Ambassador on that road.',
      },
      {
        type: 'video',
        file: 'public/archive/disasters/tsunami-footage.mp4  (or a YouTube URL)',
        note: 'Film from the tsunami work, if any exists.',
      },
      {
        type: 'quote',
        file: 'src/data/disasters.js → tsunami.quote',
        note: 'One verified line — his, a family’s, or contemporaneous press. Do not invent.',
      },
    ],
  },
  {
    id: 'floods',
    year: 'Floods',
    title: 'Floods',
    place: 'Nilgiris',
    story: [
      'The same pattern, again and again: water, then a collection, then the money handed over.',
      'Nilgiris is on the public record — Times of India, Nakkheeran.',
    ],
    images: [],
    video: null,
    quote: null,
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
    needed: [
      {
        type: 'image',
        file: 'public/archive/disasters/floods-nilgiris-01.jpg',
        note: 'Original photograph from Nilgiris flood relief.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/floods-chennai-01.jpg',
        note: 'Original photograph from Chennai floods.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/floods-cuddalore-01.jpg',
        note: 'Original photograph from Cuddalore floods.',
      },
      {
        type: 'video',
        file: 'public/archive/disasters/floods-footage.mp4  (or a YouTube URL)',
        note: 'Film of flood collection or distribution.',
      },
      {
        type: 'quote',
        file: 'src/data/disasters.js → floods.quote',
        note: 'Verified quote from the flood years.',
      },
    ],
  },
  {
    id: 'kerala',
    year: 'Kerala',
    title: 'Kerala',
    place: 'Kerala floods',
    story: [
      'Kerala is named in the original record among the disasters he collected for.',
    ],
    images: [],
    video: null,
    quote: null,
    evidence: [
      {
        href: 'https://www.newindianexpress.com/cities/chennai/2018/Sep/19/on-a-drive-to-save-lives-1874375.html',
        label: 'The New Indian Express — on a drive to save lives (Kerala flood)',
      },
    ],
    needed: [
      {
        type: 'image',
        file: 'public/archive/disasters/kerala-floods-01.jpg',
        note: 'Original photograph from Kerala flood relief.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/kerala-floods-02.jpg',
        note: 'Second still — collection, distribution, or the car.',
      },
      {
        type: 'video',
        file: 'public/archive/disasters/kerala-footage.mp4  (or a YouTube URL)',
        note: 'Film from the Kerala work, if it exists.',
      },
      {
        type: 'quote',
        file: 'src/data/disasters.js → kerala.quote',
        note: 'Verified quote. Leave empty rather than invent.',
      },
      {
        type: 'image',
        file: 'public/archive/documents/kerala-handover.jpg',
        note: 'Optional: receipt, press clipping, or handover photograph.',
      },
    ],
  },
  {
    id: 'gaja',
    year: '2018',
    title: 'Gaja',
    place: 'Pudukkottai · Karur · 45 days',
    story: [
      'Cyclone Gaja tore through Pudukkottai. His house went with it.',
      'He went to Karur anyway and served for forty-five consecutive days among people who had lost roofs, fields, and kin.',
      'The News Minute and Puthiya Thalaimurai recorded it. Film of Gaja exists.',
    ],
    images: [],
    video: {
      src: 'https://www.youtube.com/embed/9eyacZTpJno',
      title: 'Gaja — film 1',
    },
    moreVideo: [
      { href: 'https://youtu.be/f4lasJJTyJ4', label: 'Gaja — film 2' },
      { href: 'https://youtu.be/s_5Idhc1oGs', label: 'Gaja — film 3' },
      { href: 'https://youtu.be/xY5i6WJyiMw', label: 'Gaja — film 4' },
    ],
    quote: null,
    evidence: [
      {
        href: 'https://www.thenewsminute.com/tamil-nadu/tn-social-worker-who-raised-lakhs-tsunami-and-flood-victims-loses-home-gaja-92351',
        label: 'The News Minute — loses home in Gaja',
      },
      {
        href: 'https://www.puthiyathalaimurai.com/tamilnadu/gaja-strom-is-affected-515-ganesan-in-puthukottai-',
        label: 'Puthiya Thalaimurai — Gaja, Pudukkottai',
      },
      {
        href: 'https://www.nakkheeran.in/24-by-7-news/thamizhagam/515-ganesan-house-damage-he-go-give-relief',
        label: 'Nakkheeran — house damaged, he went to give relief',
      },
      {
        href: 'https://www.nakkheeran.in/24-by-7-news/thamizhagam/government-forgot-515-ganesan-service-lawrence-gave-home',
        label: 'Nakkheeran — Lawrence gave him a home',
      },
    ],
    needed: [
      {
        type: 'image',
        file: 'public/archive/disasters/gaja-house-01.jpg',
        note: 'Original photograph of the house after Gaja.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/gaja-01.jpg',
        note: 'Him on the road in the days after the cyclone.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/gaja-karur-01.jpg',
        note: 'Original still from the 45 days of service in Karur.',
      },
      {
        type: 'quote',
        file: 'src/data/disasters.js → gaja.quote',
        note: 'Verified quote from 2018 — his, a neighbour’s, or the press.',
      },
    ],
  },
  {
    id: 'other',
    year: 'Other',
    title: 'Other relief',
    place: 'Wherever the call came from',
    story: [
      'The original account also names Karnataka, Odisha, Chennai, Cuddalore — and any road that needed a collection after the water receded.',
      'More than one crore rupees passed through his hands to people who had lost more than he had. The specific stills for each place belong in the disasters folder, named by place.',
    ],
    images: [],
    video: null,
    quote: null,
    evidence: [],
    needed: [
      {
        type: 'image',
        file: 'public/archive/disasters/odisha-01.jpg',
        note: 'Original photograph from Odisha flood relief.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/karnataka-01.jpg',
        note: 'Original photograph from Karnataka flood relief.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/chennai-01.jpg',
        note: 'If separate from floods-chennai-01.jpg — a distinct still.',
      },
      {
        type: 'image',
        file: 'public/archive/disasters/cuddalore-01.jpg',
        note: 'Original photograph from Cuddalore relief.',
      },
      {
        type: 'video',
        file: 'public/archive/disasters/other-relief-footage.mp4  (or a YouTube URL)',
        note: 'Any other disaster film not already used above.',
      },
      {
        type: 'quote',
        file: 'src/data/disasters.js → other.quote',
        note: 'Verified quote from any of these relief drives.',
      },
      {
        type: 'image',
        file: 'public/archive/documents/relief-handover-01.jpg',
        note: 'Document or clipping showing money handed over (not kept).',
      },
    ],
  },
];
