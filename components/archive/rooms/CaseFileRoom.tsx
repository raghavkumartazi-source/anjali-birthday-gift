import type { archiveRooms } from "@/data/archive";
import { EvidenceItem } from "@/components/archive/rooms/EvidenceItem";
import { DossierTab } from "@/components/archive/rooms/DossierTab";

type CaseFileRoomProps = {
  caseFile: typeof archiveRooms.caseFile;
};

export function CaseFileRoom({ caseFile }: CaseFileRoomProps) {
  return (
    <section className="casefile-section" aria-label={caseFile.title}>
      {/* ── Entry header ── */}
      <div className="casefile-entry">
        <h2 className="casefile-stamp">{caseFile.title}</h2>

        <div className="casefile-meta">
          {caseFile.meta.map((m) => (
            <p className="casefile-meta-line" key={m.label}>
              {m.label}: <strong>{m.value}</strong>
            </p>
          ))}
        </div>

        <div className="casefile-declassified" aria-hidden="true">
          DECLASSIFIED
        </div>
      </div>

      {/* ── Dossiers ── */}
      {caseFile.dossiers.map((dossier, dossierIndex) => (
        <div
          className="casefile-dossier"
          data-accent={dossier.accent}
          key={dossier.id}
        >
          {/* Section tab — shown for all dossiers except the first
              (the first flows directly from the entry header) */}
          {dossierIndex > 0 && (
            <DossierTab
              title={dossier.title}
              classification={dossier.classification}
            />
          )}

          {/* Evidence items */}
          {dossier.evidence.map((item) => (
            <EvidenceItem key={item.id} item={item} />
          ))}

          {/* Hero closing image (if present) */}
          {dossier.hero && (
            <div className="dossier-hero">
              <div className="dossier-hero-text">
                {dossier.hero.preText.map((line) => (
                  <p className="dossier-hero-line" key={line}>
                    {line}
                  </p>
                ))}
              </div>

              <div className="dossier-hero-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="dossier-hero-photo"
                  src={encodeURI(dossier.hero.src)}
                  alt={dossier.hero.alt}
                  loading="lazy"
                  draggable={false}
                />
              </div>

              <p className="dossier-hero-stamp">
                {dossier.hero.closingStamp}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* ── Outro ── */}
      <div className="casefile-outro">
        {caseFile.outro.lines.map((line) => (
          <p className="casefile-outro-line" key={line}>
            {line}
          </p>
        ))}
        <p className="casefile-outro-line casefile-outro-closing">
          {caseFile.outro.closing}
        </p>
      </div>
    </section>
  );
}
