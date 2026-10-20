import { photos } from './archive.js';
import { awards, press } from './awards.js';

export const archivePage = {
  kicker: 'The 515 Archive',
  title: 'The museum of a number.',
  lede: 'Photographs. Press. Documentary film. Search and filter to find the evidence behind the work.',
  searchLabel: 'Search this section',
  searchPlaceholder: 'Search by title…',
  emptySearch: 'No items in this section match that search.',
};

export const archiveTabs = [
  { id: 'photos', label: 'Photos' },
  { id: 'news', label: 'Press' },
  { id: 'videos', label: 'Documentary' },
  { id: 'documents', label: 'Documents' },
  { id: 'awards', label: 'Awards' },
];

export const catalog = [
  {
    id: 'photo-shop-portrait',
    tab: 'photos',
    category: 'portraits',
    year: null,
    title: 'At the shop, Alangudi',
    src: photos.portraitShop.src,
  },
  {
    id: 'photo-shop-portrait-02',
    tab: 'photos',
    category: 'portraits',
    year: null,
    title: '515 Ganesan',
    src: photos.portraitShop02.src,
  },
  {
    id: 'photo-ambassador-service',
    tab: 'photos',
    category: 'ambulance',
    year: null,
    title: 'The Ambassador on service',
    src: photos.ambassadorService.src,
  },
  {
    id: 'photo-ambassador-side',
    tab: 'photos',
    category: 'ambulance',
    year: null,
    title: 'The car as a written record',
    src: photos.ambassadorSide.src,
  },
  {
    id: 'photo-ambassador-with-ganesan',
    tab: 'photos',
    category: 'ambulance',
    year: null,
    title: 'With the Ambassador',
    src: photos.ambassadorWithGanesan.src,
  },
  {
    id: 'photo-collection',
    tab: 'photos',
    category: 'service',
    year: null,
    title: 'Relief collection',
    src: photos.ambassadorCollection.src,
  },
  {
    id: 'photo-doctorate',
    tab: 'photos',
    category: 'awards',
    year: null,
    title: 'Doctorate, with the cars',
    src: photos.honoraryDoctorate.src,
  },
  {
    id: 'photo-gathering',
    tab: 'photos',
    category: 'family',
    year: null,
    title: 'A gathering at the house',
    src: photos.communityGathering.src,
  },
  {
    id: 'photo-interview-still',
    tab: 'photos',
    category: 'media',
    year: null,
    title: 'Press still',
    src: photos.interviewStill.src,
  },
  {
    id: 'photo-commemorative-mark',
    tab: 'photos',
    category: 'media',
    year: null,
    title: '75 years of 515 Ganesan',
    src: photos.commemorativeMark.src,
  },
  {
    id: 'video-service',
    tab: 'videos',
    category: 'service',
    year: null,
    title: 'Service on the road',
    href: 'https://www.youtube.com/watch?v=JdfTO_eifA4',
    sourceId: null,
  },
  {
    id: 'video-documentary',
    tab: 'videos',
    category: 'media',
    year: null,
    title: '75 Years of 515 Ganesan',
    href: 'https://www.youtube.com/watch?v=9ICU02uGwwA',
    sourceId: null,
  },
  {
    id: 'video-ibc',
    tab: 'videos',
    category: 'media',
    year: null,
    title: 'IBC Tamil feature',
    href: 'https://www.youtube.com/watch?v=DXH0ZkZOFic',
    sourceId: 'ibc-tamil',
  },
  {
    id: 'video-behindwoods',
    tab: 'videos',
    category: 'media',
    year: null,
    title: 'Behindwoods feature',
    href: 'https://youtu.be/5JXWzgQVEw0',
    sourceId: 'behindwoods',
  },
  {
    id: 'video-biography',
    tab: 'videos',
    category: 'media',
    year: null,
    title: 'Biography on film',
    href: 'https://www.youtube.com/watch?v=59TbIQ8LjwM',
    sourceId: null,
  },
  {
    id: 'video-gaja-1',
    tab: 'videos',
    category: 'disasters',
    year: 2018,
    title: 'Gaja — film 1',
    href: 'https://youtu.be/9eyacZTpJno',
    sourceId: null,
  },
  {
    id: 'video-gaja-2',
    tab: 'videos',
    category: 'disasters',
    year: 2018,
    title: 'Gaja — film 2',
    href: 'https://youtu.be/f4lasJJTyJ4',
    sourceId: null,
  },
  {
    id: 'video-gaja-3',
    tab: 'videos',
    category: 'disasters',
    year: 2018,
    title: 'Gaja — film 3',
    href: 'https://youtu.be/s_5Idhc1oGs',
    sourceId: null,
  },
  {
    id: 'video-gaja-4',
    tab: 'videos',
    category: 'disasters',
    year: 2018,
    title: 'Gaja — film 4',
    href: 'https://youtu.be/xY5i6WJyiMw',
    sourceId: null,
  },
  {
    id: 'video-social-1',
    tab: 'videos',
    category: 'service',
    year: null,
    title: 'Social service — film 1',
    href: 'https://youtu.be/secFjTc5k-I',
    sourceId: null,
  },
  {
    id: 'video-social-2',
    tab: 'videos',
    category: 'service',
    year: null,
    title: 'Social service — film 2',
    href: 'https://youtu.be/wdOEodfF-uM',
    sourceId: null,
  },
  ...press.map((article) => ({
    id: article.id,
    tab: 'news',
    category: 'media',
    year: article.year,
    title: article.title,
    sourceId: article.sourceId,
    href: article.href,
    src: article.clipping,
  })),
  ...awards.map((award) => ({
    id: `award-${award.id}`,
    tab: 'awards',
    category: 'awards',
    year: award.year,
    title: award.title,
    organization: award.organization,
    organizationId: award.organizationId,
    src: award.photograph,
    href: '/awards',
  })),
];

catalog.forEach((item, index) => {
  item.accession = String(index + 1).padStart(3, '0');
});

export const catalogNeeded = {
  photos: [
    {
      type: 'image',
      file: 'public/archive/early-life/',
      note: 'Childhood and youth photographs. Name by year if known.',
    },
    {
      type: 'image',
      file: 'public/archive/service/',
      note: 'Service stills: labour, accidents, last rites — only with dignity, only originals.',
    },
    {
      type: 'image',
      file: 'public/archive/disasters/',
      note: 'Tsunami, floods, Gaja stills listed on the Relief page.',
    },
  ],
  videos: [
    {
      type: 'video',
      file: 'Add YouTube URLs or files in public/archive/media/',
      note: 'Any interview not already listed.',
    },
  ],
  news: [
    {
      type: 'article',
      file: 'src/data/awards.js → press',
      note: 'Add every verified clipping. Articles stay the loudest evidence.',
    },
  ],
  documents: [
    {
      type: 'image',
      file: 'public/archive/documents/red-cross-card.jpg',
      note: 'Red Cross life member card.',
    },
    {
      type: 'image',
      file: 'public/archive/documents/doctorate-certificate.jpg',
      note: 'Doctorate certificate.',
    },
    {
      type: 'image',
      file: 'public/archive/documents/vehicle-registration.jpg',
      note: 'Registration or 515 windshield record.',
    },
    {
      type: 'image',
      file: 'public/archive/documents/awards-list.jpg',
      note: 'Written list of the 85+ honours, if it exists.',
    },
  ],
  awards: [
    {
      type: 'image',
      file: 'public/archive/awards/award-YYYY.jpg',
      note: 'Then add a row in src/data/awards.js so it appears here and in the museum.',
    },
  ],
};

export function itemsForTab(tab) {
  return catalog.filter((item) => item.tab === tab);
}

export function youtubeId(href) {
  if (!href) return null;
  const match = href.match(/(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null;
}

export function youtubeThumb(href) {
  const id = youtubeId(href);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export const constellation = {
  center: '515',
  branches: [
    {
      id: 'press',
      label: 'Press',
      tab: 'news',
      leaves: [...new Set(press.map((item) => item.sourceId))],
    },
    {
      id: 'awards',
      label: 'Awards',
      tab: 'awards',
      leaves: awards.map((award) => award.id),
    },
    {
      id: 'video',
      label: 'Video',
      tab: 'videos',
      leaves: ['ibc-tamil', 'behindwoods', 'documentary'],
    },
  ],
  base: { id: 'service', label: 'Service', href: '/service' },
};
