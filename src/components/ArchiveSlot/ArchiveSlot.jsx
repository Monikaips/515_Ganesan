import './ArchiveSlot.css';

/** Build slots and "needed" placeholders — visible in dev only. */
export const showBuildSlots = !import.meta.env.PROD;

export default function ArchiveSlot({ type, file, note }) {
  if (!showBuildSlots) return null;

  return (
    <div className={`archive-slot archive-slot--${type}`}>
      <span className="archive-slot__type">{type}</span>
      <p className="archive-slot__file">{file}</p>
      <p className="archive-slot__note">{note}</p>
    </div>
  );
}
