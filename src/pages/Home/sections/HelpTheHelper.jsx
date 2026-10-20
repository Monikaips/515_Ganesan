import { featuredHelpLink } from '../../../data/places.js';

export default function HelpTheHelper() {
  return (
    <section className="home-section home-section--surface" id="help-the-helper">
      <div className="home-container">
        <a className="home-help" href={featuredHelpLink.href} target="_blank" rel="noreferrer">
          <span className="home-help__kicker">{featuredHelpLink.kicker}</span>
          <span className="home-help__title">{featuredHelpLink.title}</span>
          <span className="home-help__meta">
            {featuredHelpLink.source} · {featuredHelpLink.year}
          </span>
          <span className="home-help__note">{featuredHelpLink.note}</span>
          <span className="home-help__cta">Open the story →</span>
        </a>
      </div>
    </section>
  );
}
