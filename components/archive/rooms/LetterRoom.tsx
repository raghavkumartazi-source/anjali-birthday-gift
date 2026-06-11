import {
  ishuLetter,
  rishuLetter,
  type Letter,
} from "@/data/letters";

/* ── Archive entry sequence ── */
const entryMessages = [
  "INVESTIGATION COMPLETE",
  "FINAL REPORT GENERATED ✓",
  "PERSONAL RECORDS DETECTED — 2 FILES",
  "⚠ RESTRICTED ACCESS",
  "CLEARANCE LEVEL: FAMILY",
  "ACCESS GRANTED",
  "OPENING PRIVATE ARCHIVE...",
];

/* ── Bridge transition messages ── */
const bridgeMessages = [
  "FILE SAVED ✓",
  "SCANNING ADDITIONAL RECORDS...",
  "FOUND: PERSONAL FILE — RISHU",
  "LOADING...",
];

/* ── Exit sequence ── */
const exitMessages = [
  "LETTER ARCHIVED ✓",
  "MEMORY SAVED ✓",
  "ARCHIVE STATUS: UPDATED",
  "SEARCHING FOR FINAL FILE...",
  "FOUND: 1 UNCLASSIFIED RECORD",
  "OPEN FILE? ▌",
];

function FileChrome({ label }: { label: string }) {
  return (
    <div className="letter-chrome">
      <div className="letter-chrome-dots">
        <span />
        <span />
        <span />
      </div>
      <span className="letter-chrome-label">{label}</span>
    </div>
  );
}

function LetterBody({ letter }: { letter: Letter }) {
  return (
    <div className="letter-file-container" data-author={letter.author}>
      <FileChrome label={`PERSONAL FILE // ${letter.label}`} />
      <div className="letter-file-body">
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
    </div>
  );
}

export function LetterRoom() {
  return (
    <section className="letter-section" aria-label="Personal Letters">
      {/* ── Ambient background ── */}
      <div className="letter-ambient" aria-hidden="true">
        <div className="letter-depth-grid" />
        <div className="letter-scanlines" />
        <div className="letter-vignette" />
        {/* Dust particles */}
        <div className="letter-dust">
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
          <span className="letter-dust-p" />
        </div>
      </div>

      {/* ── Entry sequence ── */}
      <div className="letter-entry">
        {entryMessages.map((msg, i) => (
          <p
            className={`letter-entry-msg${i === 3 ? " letter-entry-msg--warn" : ""}${i === 0 ? " letter-entry-msg--title" : ""}`}
            key={`em-${i}`}
          >
            {msg}
          </p>
        ))}
      </div>

      {/* ── Ishu's letter ── */}
      <LetterBody letter={ishuLetter} />

      {/* ── Bridge transition ── */}
      <div className="letter-bridge">
        {bridgeMessages.map((msg, i) => (
          <p className="letter-bridge-msg" key={`bm-${i}`}>
            {msg}
          </p>
        ))}
      </div>

      {/* ── Rishu's letter ── */}
      <LetterBody letter={rishuLetter} />

      {/* ── Exit sequence ── */}
      <div className="letter-exit">
        {exitMessages.map((msg, i) => (
          <p
            className={`letter-exit-msg${i === exitMessages.length - 1 ? " letter-exit-msg--prompt" : ""}`}
            key={`xm-${i}`}
          >
            {msg}
          </p>
        ))}
      </div>
    </section>
  );
}
