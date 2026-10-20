import RedLine, { NODE } from '../RedLine/RedLine.jsx';
import './SectionTitle.css';

export default function SectionTitle({
  kicker,
  title,
  id,
  align = 'left',
  tone = 'light',
  node = NODE.center,
}) {
  const classes = [
    'chapter',
    align === 'center' ? 'chapter--center' : '',
    tone === 'dark' ? 'chapter--on-dark' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      {kicker && <p className="chapter__kicker">{kicker}</p>}
      <RedLine length="short" node={node} />
      {title && (
        <h2 className="chapter__title" id={id}>
          {title}
        </h2>
      )}
    </header>
  );
}
