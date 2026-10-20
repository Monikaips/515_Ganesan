import PhotoCard from '../Media/PhotoCard.jsx';
import VideoCard from '../Media/VideoCard.jsx';
import PressTile from './PressTile.jsx';
import AwardCard from '../Awards/AwardCard.jsx';

export default function ArchiveCard({ item, onOpen }) {
  if (item.tab === 'videos') {
    return <VideoCard item={item} onOpen={onOpen} />;
  }

  if (item.tab === 'news') {
    return <PressTile article={item} onOpen={onOpen} />;
  }

  if (item.tab === 'awards') {
    return (
      <AwardCard
        award={{
          id: item.id,
          year: item.year,
          title: item.title,
          organization: item.organization,
          photograph: item.src,
        }}
        onOpen={() => onOpen?.(item)}
      />
    );
  }

  return <PhotoCard item={item} onOpen={onOpen} />;
}
