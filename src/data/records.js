import { articlesForAward, press } from './awards.js';
import { catalog, youtubeThumb } from './catalog.js';
import { sourceById } from './sources.js';

export function pressToRecord(article) {
  const source = sourceById(article.sourceId);
  const relatedNews = press.filter(
    (item) => item.sourceId === article.sourceId && item.id !== article.id,
  );

  return {
    kind: 'press',
    id: article.id,
    accession: catalog.find((item) => item.id === article.id)?.accession,
    year: article.year,
    title: article.title,
    subtitle: source?.name,
    sourceId: article.sourceId,
    image: article.clipping,
    href: article.href,
    hrefLabel: 'Read original article',
    related: {
      photographs: [],
      news: relatedNews,
      videos: [],
    },
    needed: article.clipping
      ? []
      : [
          {
            type: 'image',
            file: `public/archive/documents/${article.id}-clipping.jpg`,
            note: 'Scan of the original clipping, if you have it.',
          },
        ],
  };
}

export function awardToRecord(award) {
  return {
    kind: 'award',
    id: award.id,
    accession: catalog.find((item) => item.id === `award-${award.id}`)?.accession,
    year: award.year,
    title: award.title,
    subtitle: award.organization,
    image: award.photograph,
    secondaryImage: award.certificate,
    body: award.details,
    related: {
      photographs: award.photograph
        ? [{ src: award.photograph, title: award.title, id: award.id }]
        : [],
      news: articlesForAward(award),
      videos: award.videos ?? [],
    },
    needed: award.needed ?? [],
  };
}

export function videoToRecord(item) {
  const source = sourceById(item.sourceId);
  return {
    kind: 'video',
    id: item.id,
    accession: item.accession,
    year: item.year,
    title: item.title,
    subtitle: source?.name ?? 'Film',
    sourceId: item.sourceId,
    image: youtubeThumb(item.href),
    href: item.href,
    hrefLabel: 'Watch the film',
    related: { photographs: [], news: [], videos: [] },
  };
}

export function photoToRecord(item) {
  return {
    kind: 'photograph',
    id: item.id,
    accession: item.accession,
    year: item.year,
    title: item.title,
    subtitle: null,
    image: item.src,
    related: { photographs: [], news: [], videos: [] },
  };
}
