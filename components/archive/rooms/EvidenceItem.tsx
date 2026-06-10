import type { EvidenceItem as EvidenceItemType } from "@/data/archive";

type EvidenceItemProps = {
  item: EvidenceItemType;
};

export function EvidenceItem({ item }: EvidenceItemProps) {
  return (
    <div className="casefile-evidence" data-evidence={item.evidenceNumber}>
      <p className="evidence-number">EVIDENCE #{item.evidenceNumber}</p>

      <div className="evidence-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="evidence-photo"
          src={encodeURI(item.src)}
          alt={item.alt}
          loading="lazy"
          draggable={false}
          data-contain={item.contain ? "true" : undefined}
        />

        <div className="evidence-redaction" aria-hidden="true">
          <span className="evidence-redact-bar" />
          <span className="evidence-redact-bar" />
          <span className="evidence-redact-bar" />
          <span className="evidence-redact-bar" />
          <span className="evidence-redact-bar" />
          <span className="evidence-redact-bar" />
        </div>

        <div
          className="evidence-marker evidence-marker--tl"
          aria-hidden="true"
        />
        <div
          className="evidence-marker evidence-marker--tr"
          aria-hidden="true"
        />
        <div
          className="evidence-marker evidence-marker--bl"
          aria-hidden="true"
        />
        <div
          className="evidence-marker evidence-marker--br"
          aria-hidden="true"
        />
      </div>

      <div className="evidence-notes">
        {item.notes.map((note) => (
          <p className="evidence-note" key={note}>
            {note}
          </p>
        ))}
      </div>
    </div>
  );
}
