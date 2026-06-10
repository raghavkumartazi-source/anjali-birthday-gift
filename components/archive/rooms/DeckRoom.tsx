import { forwardRef } from "react";
import { reasonCards, type ReasonCard } from "@/data/reasons";

const getSuitSymbol = (suit: ReasonCard["suit"]) => {
  switch (suit) {
    case "hearts":
      return "♥";
    case "spades":
      return "♠";
    case "clubs":
      return "♣";
    case "diamonds":
      return "♦";
  }
};

export const DeckRoom = forwardRef<HTMLDivElement>(function DeckRoom(_, ref) {
  return (
    <section className="deck-room" aria-label="The Deck of Evidence" ref={ref}>
      <div className="deck-camera">
        {reasonCards.map((card, index) => {
          const suitSymbol = getSuitSymbol(card.suit);
          // First card gets highest z-index so it renders on top
          const zIndex = reasonCards.length - index;

          return (
            <div
              key={card.id}
              className={`deck-card deck-card--${card.suit} ${
                card.isFinal ? "deck-card--final" : ""
              }`}
              style={{ zIndex }}
            >
              <div className="deck-card-inner">
                {/* ── Card Back (Face down initially) ── */}
                <div className="deck-card-face deck-card-back" aria-hidden="true">
                  <div className="deck-card-back-pattern">
                    <span>ARCHIVE</span>
                    <span>LOG</span>
                  </div>
                </div>

                {/* ── Card Front (Face up after flip) ── */}
                <div className="deck-card-face deck-card-front">
                  <div className="card-corner card-corner-tl">
                    <span>{card.number}</span>
                    <span className="card-suit">{suitSymbol}</span>
                  </div>

                  <div className="card-center">
                    {card.text.map((line, i) => (
                      <p key={i} className="card-line">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="card-corner card-corner-br">
                    <span>{card.number}</span>
                    <span className="card-suit">{suitSymbol}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Blinding transition overlay for the final card */}
      <div className="deck-transition-wash" aria-hidden="true" />
    </section>
  );
});
