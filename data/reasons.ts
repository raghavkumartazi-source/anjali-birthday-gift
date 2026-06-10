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
];
