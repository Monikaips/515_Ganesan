import ArchiveModal from '../Archive/ArchiveModal.jsx';
import { awardToRecord } from '../../data/records.js';

export default function AwardViewer({ award, awards, onClose, onSelect }) {
  const records = awards.map(awardToRecord);
  const record = award ? awardToRecord(award) : null;

  return (
    <ArchiveModal
      record={record}
      records={records}
      onClose={onClose}
      onSelect={(next) => {
        const match = awards.find((item) => item.id === next.id);
        if (match) onSelect(match);
      }}
    />
  );
}
