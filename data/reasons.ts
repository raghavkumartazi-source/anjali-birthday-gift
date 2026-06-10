<<<<<<< HEAD
export type CardSuit = "hearts" | "spades" | "clubs" | "diamonds";

export type ReasonCard = {
  id: string;
  suit: CardSuit;
  number: string;
  text: string[];
  isFinal?: boolean;
};

export const reasonCards: ReasonCard[] = [
  // HEARTS: Emotional qualities
  {
    id: "h-1",
    suit: "hearts",
    number: "01",
    text: ["Perfect younger-sister vibe."],
  },
  {
    id: "h-2",
    suit: "hearts",
    number: "02",
    text: ["Caring.", "Always looking out for us."],
  },
  {
    id: "h-3",
    suit: "hearts",
    number: "03",
    text: ["Makes people feel included.", "Nobody gets left behind."],
  },
  {
    id: "h-4",
    suit: "hearts",
    number: "04",
    text: ["Trusts us with responsibility.", "And we don't take that lightly."],
  },

  // SPADES: Reliability and strength
  {
    id: "s-1",
    suit: "spades",
    number: "05",
    text: ["Responsible when it matters."],
  },
  {
    id: "s-2",
    suit: "spades",
    number: "06",
    text: ["Always teams up with us."],
  },
  {
    id: "s-3",
    suit: "spades",
    number: "07",
    text: ["Makes family gatherings better.", "The missing puzzle piece."],
  },
  {
    id: "s-4",
    suit: "spades",
    number: "08",
    text: ["Makes every moment more fun."],
  },

  // CLUBS: Gang energy
  {
    id: "c-1",
    suit: "clubs",
    number: "09",
    text: ["Always has something", "interesting to talk about."],
  },
  {
    id: "c-2",
    suit: "clubs",
    number: "10",
    text: ["Taught us things", "we didn't know."],
  },
  {
    id: "c-3",
    suit: "clubs",
    number: "11",
    text: ["Creates stories we will", "laugh about for years."],
  },
  {
    id: "c-4",
    suit: "clubs",
    number: "12",
    text: ["Turns boring moments", "into memories."],
  },

  // DIAMONDS: Chaos department
  {
    id: "d-1",
    suit: "diamonds",
    number: "13",
    text: ["Never gets angry", "when teased."],
  },
  {
    id: "d-2",
    suit: "diamonds",
    number: "14",
    text: ["Tolerates Rishu's nonsense."],
  },
  {
    id: "d-3",
    suit: "diamonds",
    number: "15",
    text: ["Laughs at jokes", "that aren't funny."],
  },
  {
    id: "d-4",
    suit: "diamonds",
    number: "16",
    text: ["YOU ARE THE REASON", "THIS WEBSITE EXISTS. ❤️"],
    isFinal: true,
  },
=======
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
>>>>>>> dd1bcf5 (Update project)
];
