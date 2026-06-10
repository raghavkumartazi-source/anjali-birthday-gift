import { deckCards } from "@/data/reasons";

export function DeckRoom() {
  return (
    <section className="deck-section" aria-label="The Deck of Evidence">
      {/* ── Intro (scroll-revealed, not pinned) ── */}
      <div className="deck-intro">
        <p className="deck-intro-label">RECOVERED EVIDENCE</p>
        <h2 className="deck-intro-title">THE DECK OF EVIDENCE</h2>
        <p className="deck-intro-sub">16 reasons. 1 conclusion.</p>
      </div>

      {/* ── Pinned card stage ── */}
      <div className="deck-stage">
        {deckCards.map((card) => (
          <div
            className={`deck-card${card.isFinal ? " deck-card--final" : ""}`}
            data-suit={card.suit}
            key={card.id}
          >
            <div className="deck-card-inner">
              {/* ── Back face (visible initially) ── */}
              <div
                className="deck-card-face deck-card-back"
                aria-hidden="true"
              >
                <span className="deck-back-index">
                  {String(card.index).padStart(2, "0")} / 16
                </span>
                <div className="deck-back-seal">
                  <span>CLASSIFIED</span>
                </div>
                <span className="deck-back-label">GANG ARCHIVES</span>
              </div>

              {/* ── Front face (revealed after flip) ── */}
              <div className="deck-card-face deck-card-front">
                <p className="deck-front-filed">
                  FILED UNDER: {card.filed}{" "}
                  <span className="deck-front-symbol">{card.symbol}</span>
                </p>

                <div className="deck-front-body">
                  <p className="deck-front-reason">{card.text}</p>
                </div>

                <p className="deck-front-index">
                  {String(card.index).padStart(2, "0")} / 16
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* ── Transition wash ── */}
        <div className="deck-wash" aria-hidden="true" />
      </div>
    </section>
  );
}
