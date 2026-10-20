import AwardCard from './AwardCard.jsx';
import './AwardWall.css';

export default function AwardWall({ awards, onOpen }) {
  return (
    <div className="award-wall">
      {awards.map((award) => (
        <AwardCard key={award.id} award={award} onOpen={onOpen} />
      ))}
    </div>
  );
}
