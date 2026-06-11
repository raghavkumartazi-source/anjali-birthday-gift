import Image from "next/image";
import {
  photoScanMessages,
  secretPhotoSrc,
  secretPhotoReactions,
  gangMemories,
  verdictProcessing,
  verdictResult,
  birthdayCoda,
  shutdownChecklist,
  terminalLines,
} from "@/data/finale";

export function FinaleRoom() {
  return (
    <section className="finale-section" aria-label="Case Closed">
      {/* ── Ambient background ── */}
      <div className="finale-ambient" aria-hidden="true">
        <div className="finale-vignette" />
      </div>

      {/* ══════ PART 1 — Classified Photo ══════ */}
      <div className="finale-scan-intro">
        {photoScanMessages.map((msg, i) => (
          <p className={`finale-scan-msg${i === 1 ? " finale-scan-msg--alert" : ""}`} key={`ps-${i}`}>
            {msg}
          </p>
        ))}
      </div>

      <div className="finale-photo-stage">
        <div className="finale-photo-frame">
          <Image
            src={secretPhotoSrc}
            alt="Classified photo of Anjali"
            width={600}
            height={800}
            className="finale-photo"
            priority={false}
          />
          <div className="finale-photo-scanlines" aria-hidden="true" />
        </div>
        <div className="finale-photo-reactions">
          {secretPhotoReactions.map((r, i) => (
            <p
              className={`finale-reaction${i === 0 ? " finale-reaction--warn" : ""}`}
              key={`pr-${i}`}
            >
              {r}
            </p>
          ))}
        </div>
      </div>

      {/* ══════ PART 2 — Gang Memories ══════ */}
      <div className="finale-memories">
        <p className="finale-memories-title">RECOVERED GANG RECORDS</p>
        <div className="finale-memory-grid">
          {gangMemories.map((mem, i) => (
            <div className="finale-memory-card" key={`gm-${i}`}>
              <span className="finale-memory-label">{mem.label}</span>
              <span className="finale-memory-value">{mem.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════ PART 3 — Verdict ══════ */}
      <div className="finale-verdict">
        <div className="finale-verdict-process">
          {verdictProcessing.map((msg, i) => (
            <p className="finale-verdict-msg" key={`vp-${i}`}>
              {msg}
            </p>
          ))}
        </div>

        <div className="finale-verdict-reveal">
          <p className="finale-verdict-label">FINAL VERDICT:</p>
          <h2 className="finale-verdict-result">{verdictResult}</h2>
        </div>
      </div>

      {/* ══════ PART 4 — Birthday ══════ */}
      <div className="finale-birthday">
        <div className="finale-birthday-glow" aria-hidden="true" />
        <div className="finale-birthday-hero">
          <span className="finale-bday-line">HAPPY</span>
          <span className="finale-bday-line finale-bday-line--num">16TH</span>
          <span className="finale-bday-line">BIRTHDAY</span>
          <span className="finale-bday-line finale-bday-line--name">
            ANJALI
          </span>
        </div>

        <div className="finale-birthday-coda">
          {birthdayCoda.map((line, i) => (
            <p
              className={`finale-coda-line${i === birthdayCoda.length - 1 ? " finale-coda-line--sign" : ""}`}
              key={`cl-${i}`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* ══════ PART 5 — Archive Shutdown ══════ */}
      <div className="finale-shutdown">
        <p className="finale-shutdown-title">ARCHIVING ALL DATA...</p>
        <div className="finale-checklist">
          {shutdownChecklist.map((item, i) => (
            <p className="finale-check" key={`sc-${i}`}>
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* ══════ Terminal ══════ */}
      <div className="finale-terminal">
        {terminalLines.map((line, i) => (
          <p className={`finale-term-line${!line ? " finale-term-line--spacer" : ""}`} key={`tl-${i}`}>
            {line || "\u00A0"}
          </p>
        ))}
        <span className="finale-cursor" aria-hidden="true">
          █
        </span>
      </div>
    </section>
  );
}
