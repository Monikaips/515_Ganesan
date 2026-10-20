import { photos } from './archive.js';
import { sources } from './sources.js';

export const awardsPage = {
  kicker: 'Award Museum',
  title: 'The papers spoke louder than the plaques.',
  lede: 'Eighty-five honours. A tiled roof. The press is the louder wall.',
};

export const doctorateHighlight = {
  id: 'bbc-doctorate',
  href: 'https://www.bbc.com/tamil/india-45635703',
  sourceId: 'bbc-tamil',
  year: 2018,
  title: "'515' கணேசன் — நெகிழ வைக்கும் சாதனைக்காக கிடைத்த டாக்டர் பட்டம்",
  titleEn: 'Doctorate for a life of service — BBC News Tamil',
  summary:
    'BBC Tamil carried the Hindu Tamil report: Bharath Virtual University, Bengaluru, awarded him a doctorate for decades of free ambulance work. The photograph of the honour belongs beside this clipping.',
  photograph: photos.honoraryDoctorate.src,
  photographAlt: photos.honoraryDoctorate.alt,
};

export const press = [
  {
    id: 'bbc-doctorate',
    href: doctorateHighlight.href,
    sourceId: 'bbc-tamil',
    year: 2018,
    title: doctorateHighlight.titleEn,
    language: 'ta',
    topic: 'doctorate',
    clipping: null,
  },
  {
    id: 'pt-help-gaja',
    href: 'https://share.google/HkX6aziK9qZIJeKBX',
    sourceId: 'puthiya-thalaimurai',
    year: 2018,
    title: 'Help the man who helped everyone — after Gaja took the house',
    language: 'ta',
    topic: 'gaja',
    clipping: null,
  },
  {
    id: 'nakkheeran-gaja-house',
    href: 'https://www.nakkheeran.in/24-by-7-news/thamizhagam/515-ganesan-house-damage-he-go-give-relief',
    sourceId: 'nakkheeran',
    year: 2018,
    title: 'House damaged in Gaja — he went to give relief anyway',
    language: 'ta',
    topic: 'gaja',
    clipping: null,
  },
  {
    id: 'nie-drive',
    href: 'https://www.newindianexpress.com/cities/chennai/2018/Sep/19/on-a-drive-to-save-lives-1874375.html',
    sourceId: 'new-indian-express',
    year: 2018,
    title: 'On a drive to save lives — Kerala flood collection',
    language: 'en',
    topic: 'kerala',
    clipping: null,
  },
  {
    id: 'tnm-gaja',
    href: 'https://www.thenewsminute.com/tamil-nadu/tn-social-worker-who-raised-lakhs-tsunami-and-flood-victims-loses-home-gaja-92351',
    sourceId: 'the-news-minute',
    year: 2018,
    title: 'The man who raised lakhs loses his home in Gaja',
    language: 'en',
    topic: 'gaja',
    clipping: null,
  },
  {
    id: 'behindwoods-corona',
    href: 'https://tamil.behindwoods.com/news-shots-tamil-news/tamilnadu/515-ganesan-helping-people-his-three-cars-during-corona.html',
    sourceId: 'behindwoods',
    year: 2020,
    title: 'Three cars during Corona',
    language: 'ta',
    topic: 'corona',
    clipping: null,
  },
  {
    id: 'toi-nilgiris',
    href: 'https://timesofindia.indiatimes.com/city/trichy/ganesan-sets-out-for-relief-collection-again-this-time-for-flood-hit-nilgiris/articleshow/70683873.cms',
    sourceId: 'times-of-india',
    year: 2019,
    title: 'Relief collection for flood-hit Nilgiris',
    language: 'en',
    topic: 'nilgiris',
    clipping: null,
  },
  {
    id: 'vikatan-emergency',
    href: 'https://www.vikatan.com/spiritual/temples/109592-do-you-know-about-515-ganesan-emergency-car-service',
    sourceId: 'vikatan',
    year: null,
    title: 'Do you know about 515 Ganesan emergency car service',
    language: 'ta',
    topic: 'life',
    clipping: null,
  },
  {
    id: 'nakkheeran-lawrence',
    href: 'https://www.nakkheeran.in/24-by-7-news/thamizhagam/government-forgot-515-ganesan-service-lawrence-gave-home',
    sourceId: 'nakkheeran',
    year: null,
    title: 'Lawrence came as god — when the government forgot',
    language: 'ta',
    topic: 'life',
    clipping: null,
  },
  {
    id: 'tamiljanam-life',
    href: 'https://tamiljanam.com/91354559/',
    sourceId: 'tamiljanam',
    year: null,
    title: 'The life of 515 Ganesan',
    language: 'ta',
    topic: 'life',
    clipping: null,
  },
  {
    id: 'drivespark-55',
    href: 'https://tamil.drivespark.com/off-beat/515-ganesan-from-alangudi-runs-ambulance-service-for-55-years-in-his-ambassador-car-049539.html',
    sourceId: 'drivespark',
    year: null,
    title: '55 years of free ambulance in an Ambassador',
    language: 'ta',
    topic: 'life',
    clipping: null,
  },
  {
    id: 'vikatan-story',
    href: 'https://www.vikatan.com/literature/arts/137851-story-about-free-car-service-515-ganesan',
    sourceId: 'vikatan',
    year: null,
    title: 'Story about free car service',
    language: 'ta',
    topic: 'life',
    clipping: null,
  },
  {
    id: 'nakkheeran-special',
    href: 'https://www.nakkheeran.in/special-articles/special-article/515-ganesan',
    sourceId: 'nakkheeran',
    year: null,
    title: 'Special article: 515 Ganesan',
    language: 'ta',
    topic: 'life',
    clipping: null,
  },
  {
    id: 'pt-all',
    href: 'https://www.puthiyathalaimurai.com/topic/515-ganesan',
    sourceId: 'puthiya-thalaimurai',
    year: null,
    title: 'All about 515 Ganesan',
    language: 'ta',
    topic: 'life',
    clipping: null,
  },
  {
    id: 'nakkheeran-nilgiris',
    href: 'https://www.nakkheeran.in/24-by-7-news/thamizhagam/pudukottaii-am-dr-515-ganesan-please-help-nilgiris',
    sourceId: 'nakkheeran',
    year: null,
    title: 'Plea for Nilgiris',
    language: 'ta',
    topic: 'nilgiris',
    clipping: null,
  },
  {
    id: 'pt-gaja',
    href: 'https://www.puthiyathalaimurai.com/tamilnadu/gaja-strom-is-affected-515-ganesan-in-puthukottai-',
    sourceId: 'puthiya-thalaimurai',
    year: 2018,
    title: 'Gaja storm — Pudukkottai',
    language: 'ta',
    topic: 'gaja',
    clipping: null,
  },
];

export function pressWithSource(article = press) {
  const list = Array.isArray(article) ? article : [article];
  return list.map((item) => ({
    ...item,
    source: sources[item.sourceId]?.name ?? item.sourceId,
    sourceShort: sources[item.sourceId]?.short ?? item.sourceId,
  }));
}

export const awards = [
  {
    id: 'red-cross',
    year: null,
    title: 'Life Member',
    organization: 'Indian Red Cross',
    organizationId: 'red-cross',
    details:
      'Life membership issued to Dr. 515 Ganesan. The card authorised him on every national highway of India. The red cross on the windshield was the same mark.',
    photograph: photos.ambassadorSide.src,
    certificate: null,
    articles: [{ id: 'nie-drive' }, { id: 'vikatan-emergency' }],
    videos: [],
    needed: [
      {
        type: 'image',
        file: 'public/archive/awards/red-cross-certificate.jpg',
        note: 'Scan or photograph of the Red Cross life member card / certificate.',
      },
      {
        type: 'image',
        file: 'public/archive/awards/red-cross-photograph.jpg',
        note: 'Photograph of the presentation, if it exists.',
      },
      {
        type: 'video',
        file: 'YouTube URL or public/archive/awards/red-cross.mp4',
        note: 'Film of the Red Cross honour, if any.',
      },
    ],
  },
  {
    id: 'doctorate',
    year: 2018,
    title: 'Doctor of Social Work',
    organization: 'Bharath University, Karnataka',
    organizationId: 'bharath-university',
    details:
      'Awarded for the work, not the other way around. BBC Tamil and Hindu Tamil recorded the honour. The photograph shows him in the gown, the Ambassadors behind him, still marked 515.',
    photograph: photos.honoraryDoctorate.src,
    certificate: null,
    articles: [{ id: 'bbc-doctorate' }, { id: 'nakkheeran-special' }],
    videos: [
      {
        href: 'https://www.youtube.com/watch?v=9ICU02uGwwA',
        title: '75 Years of 515 Ganesan',
        sourceId: null,
        year: null,
      },
    ],
    needed: [
      {
        type: 'image',
        file: 'public/archive/awards/doctorate-certificate.jpg',
        note: 'Scan of the doctorate certificate.',
      },
      {
        type: 'quote',
        file: 'src/data/awards.js → doctorate (add details from the citation)',
        note: 'Exact wording from the certificate, if you have it.',
      },
    ],
  },
];

export const awardsNeeded = [
  {
    type: 'image',
    file: 'public/archive/awards/award-YYYY.jpg',
    note: 'One photograph per honour. Name by year: award-1998.jpg, award-2015.jpg.',
  },
  {
    type: 'image',
    file: 'public/archive/awards/award-YYYY-certificate.jpg',
    note: 'Matching certificate scan for each year.',
  },
  {
    type: 'image',
    file: 'public/archive/documents/awards-list.jpg',
    note: 'If a written list of all 85+ exists, photograph or type it into awards.js.',
  },
];

export function sortedAwards() {
  return [...awards].sort((a, b) => {
    if (a.year == null && b.year == null) return 0;
    if (a.year == null) return 1;
    if (b.year == null) return -1;
    return a.year - b.year;
  });
}

export function pressById(id) {
  return press.find((article) => article.id === id) ?? null;
}

export function articlesForAward(award) {
  return (award.articles ?? [])
    .map((ref) => pressById(ref.id) ?? ref)
    .filter(Boolean)
    .map((item) => ({
      ...item,
      source: sources[item.sourceId]?.name ?? item.source ?? item.sourceId,
    }));
}

export const pressYears = [...new Set(press.map((item) => item.year).filter(Boolean))].sort();
