export default function AchievementCard({ href, image, title, text }) {
  return (
    <div className="achievement-card">
      <a href={href} target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
        <div className="achievement-info">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
}
