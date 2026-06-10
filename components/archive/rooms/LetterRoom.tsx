import {
  ishuLetter,
  rishuLetter,
  bridgeText,
  type Letter,
} from "@/data/letters";

function LetterBody({ letter }: { letter: Letter }) {
  return (
    <div className="letter-room" data-author={letter.author}>
      {/* Header */}
      <div className="letter-header">
        <p className="letter-file-label">PERSONAL FILE</p>
        <h2 className="letter-author">{letter.label}</h2>
      </div>

      {/* Letter blocks */}
      <div className="letter-body">
        {letter.blocks.map((block) => (
          <div
            className={`letter-block letter-block--${block.type}`}
            key={block.id}
            data-block-type={block.type}
          >
            <p className="letter-text">{block.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LetterRoom() {
  return (
    <section className="letter-section" aria-label="Personal Letters">
      {/* ── Ishu's letter ── */}
      <LetterBody letter={ishuLetter} />

      {/* ── Bridge transition ── */}
      <div className="letter-bridge">
        <p className="letter-bridge-text">{bridgeText}</p>
      </div>

      {/* ── Rishu's letter ── */}
      <LetterBody letter={rishuLetter} />

      {/* ── Final hold ── */}
      <div className="letter-hold" aria-hidden="true" />
    </section>
  );
}
