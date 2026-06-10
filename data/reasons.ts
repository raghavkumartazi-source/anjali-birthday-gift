export type DeckCard = {
  id: string;
  index: number;
  suit: "hearts" | "spades" | "clubs" | "diamonds";
  symbol: string;
  filed: string;
  text: string;
  isFinal?: boolean;
};

export const deckCards: DeckCard[] = [
  // ── HEARTS: Emotional ──
  { id: "h1", index: 1,  suit: "hearts",   symbol: "♥", filed: "HEARTS",   text: "You never get angry when we tease you. 😆" },
  { id: "h2", index: 2,  suit: "hearts",   symbol: "♥", filed: "HEARTS",   text: "You have the perfect younger-sister vibe. 💖" },
  { id: "h3", index: 3,  suit: "hearts",   symbol: "♥", filed: "HEARTS",   text: "You somehow tolerate all of Rishu's nonsense. 😌" },
  { id: "h4", index: 4,  suit: "hearts",   symbol: "♥", filed: "HEARTS",   text: "You're one of the most caring people in the gang. ❤️" },

  // ── SPADES: Reliability ──
  { id: "s1", index: 5,  suit: "spades",   symbol: "♠", filed: "SPADES",   text: "You taught us things we didn't know (including card games 😂). 🃏" },
  { id: "s2", index: 6,  suit: "spades",   symbol: "♠", filed: "SPADES",   text: "You're always ready to team up with us. 🤝" },
  { id: "s3", index: 7,  suit: "spades",   symbol: "♠", filed: "SPADES",   text: "You always have something interesting to talk about. 💬" },
  { id: "s4", index: 8,  suit: "spades",   symbol: "♠", filed: "SPADES",   text: "You make family gatherings better just by being there. 🎉" },

  // ── CLUBS: Gang energy ──
  { id: "c1", index: 9,  suit: "clubs",    symbol: "♣", filed: "CLUBS",    text: "You somehow turn boring moments into good memories. ✨" },
  { id: "c2", index: 10, suit: "clubs",    symbol: "♣", filed: "CLUBS",    text: "You laugh at jokes that aren't even funny. 😂" },
  { id: "c3", index: 11, suit: "clubs",    symbol: "♣", filed: "CLUBS",    text: "You're responsible when it actually matters. 🌟" },
  { id: "c4", index: 12, suit: "clubs",    symbol: "♣", filed: "CLUBS",    text: "You make people feel included. 🤗" },

  // ── DIAMONDS: Chaos + Final ──
  { id: "d1", index: 13, suit: "diamonds", symbol: "♦", filed: "DIAMONDS", text: "You create stories we'll still laugh about years later. 📸" },
  { id: "d2", index: 14, suit: "diamonds", symbol: "♦", filed: "DIAMONDS", text: "You trust us enough to give us responsibility. 🫶" },
  { id: "d3", index: 15, suit: "diamonds", symbol: "♦", filed: "DIAMONDS", text: "You make every moment more fun. ✨" },

  // ── THE ACE ──
  { id: "ace", index: 16, suit: "diamonds", symbol: "♦", filed: "DIAMONDS", text: "You are the reason this website exists. ❤️", isFinal: true },
];
