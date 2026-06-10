export type LetterBlockType =
  | "greeting"
  | "paragraph"
  | "hero"
  | "climax"
  | "signature";

export type LetterBlock = {
  id: string;
  type: LetterBlockType;
  text: string;
};

export type Letter = {
  id: string;
  author: string;
  label: string;
  blocks: LetterBlock[];
};

export const ishuLetter: Letter = {
  id: "letter-ishu",
  author: "ishu",
  label: "ISHU",
  blocks: [
    {
      id: "i-00",
      type: "greeting",
      text: "Hey Anjali,",
    },
    {
      id: "i-01",
      type: "paragraph",
      text: "It\u2019s hard to believe you\u2019re already 16. It feels like just yesterday you were the youngest one in the gang, and now you\u2019re growing up way too fast.",
    },
    {
      id: "i-02",
      type: "paragraph",
      text: "One thing I\u2019ve always admired about you is how caring and genuine you are. You have a way of making people feel comfortable, included, and valued without even trying. Whether it\u2019s family gatherings, trips, or just random conversations, your presence always makes things better.",
    },
    {
      id: "i-03",
      type: "paragraph",
      text: "Thank you for all the memories, the laughs, the card games, and the chaos you\u2019ve brought into our lives. The gang wouldn\u2019t be the same without you.",
    },
    {
      id: "i-04",
      type: "paragraph",
      text: "Stay exactly the way you are\u2014kind, funny, and unapologetically yourself.",
    },
    {
      id: "i-05",
      type: "paragraph",
      text: "Happy 16th Birthday, Anjali. \u2764\uFE0F",
    },
    {
      id: "i-06",
      type: "signature",
      text: "\u2014 Ishu",
    },
  ],
};

export const rishuLetter: Letter = {
  id: "letter-rishu",
  author: "rishu",
  label: "RISHU",
  blocks: [
    {
      id: "r-00",
      type: "greeting",
      text: "Hey my best cousin Anjali,",
    },
    {
      id: "r-01",
      type: "paragraph",
      text: "First of all, Happy 16th Birthday! \uD83C\uDF89\uD83C\uDF82\u2728",
    },
    {
      id: "r-02",
      type: "paragraph",
      text: "Honestly, when I started making this website, I thought it would be easy. Then I realized I had way too many photos, way too many memories, and way too many things to say. \uD83D\uDE05",
    },
    {
      id: "r-03",
      type: "paragraph",
      text: "Over the years, I\u2019ve roasted you for your height, annoyed you for no reason, and somehow managed to tease you on almost every topic possible. Yet, somehow, you never got angry. I still don\u2019t know how you tolerate me. \uD83D\uDE06\uD83D\uDE02",
    },
    {
      id: "r-04",
      type: "paragraph",
      text: "One thing I really like about you is that you never let people around you get bored. Whether it\u2019s playing cards, random conversations, or just sitting together doing absolutely nothing, you somehow make everything more fun. \uD83D\uDE0A",
    },
    {
      id: "r-05",
      type: "paragraph",
      text: "The Jaipur trip reminded me of that again.",
    },
    {
      id: "r-06",
      type: "paragraph",
      text: "You taught me to play cards while I taught you the ancient and highly illegal art of cheating in UNO. \uD83D\uDE02\uD83C\uDCCF",
    },
    {
      id: "r-07",
      type: "paragraph",
      text: "And somewhere between all the roaming, late-night gossip, card games, and random adventures, you gave me a responsibility I didn\u2019t expect \u2014 making sure you were safe and not accidentally left behind somewhere. \uD83D\uDEB6\u200D\u2642\uFE0F\uD83D\uDEB6\u200D\u2640\uFE0F\uD83C\uDF19",
    },
    {
      id: "r-08",
      type: "hero",
      text: "It sounds like a small thing, but it meant a lot to me. It showed how much you trusted me, and that\u2019s something I won\u2019t forget.",
    },
    {
      id: "r-09",
      type: "hero",
      text: "Because even though I tease you all the time, I\u2019ve always seen you as the perfect younger sister. Someone caring, fun to be around, and someone who can instantly make a normal day better just by being there. \uD83D\uDC96",
    },
    {
      id: "r-10",
      type: "paragraph",
      text: "There are many photos on this website, and each one captures a moment. But what they don\u2019t capture is how much I enjoy having you around.",
    },
    {
      id: "r-11",
      type: "paragraph",
      text: "The truth is, birthdays are not really about getting older.",
    },
    {
      id: "r-12",
      type: "paragraph",
      text: "They\u2019re about looking back and realizing how many good memories you\u2019ve created for the people around you. \uD83C\uDF1F",
    },
    {
      id: "r-13",
      type: "paragraph",
      text: "And you\u2019ve created a lot of them.",
    },
    {
      id: "r-14",
      type: "paragraph",
      text: "So here\u2019s one thing I want you to remember.",
    },
    {
      id: "r-15",
      type: "paragraph",
      text: "No matter whether it\u2019s tomorrow, next year, or ten years from now...",
    },
    {
      id: "r-16",
      type: "hero",
      text: "If you\u2019re stressed, worried, confused, stuck, upset, or simply need someone to talk to, you can call me. \uD83E\uDD1D",
    },
    {
      id: "r-17",
      type: "hero",
      text: "If you need help, call me.",
    },
    {
      id: "r-18",
      type: "hero",
      text: "If you\u2019re having a bad day, call me.",
    },
    {
      id: "r-19",
      type: "hero",
      text: "If something is bothering you and you don\u2019t know who to tell, call me.",
    },
    {
      id: "r-20",
      type: "paragraph",
      text: "And if you just want to gossip about something completely useless, you can call me for that too. \uD83D\uDE04\uD83D\uDCDE",
    },
    {
      id: "r-21",
      type: "hero",
      text: "I can\u2019t promise I\u2019ll have all the answers.",
    },
    {
      id: "r-22",
      type: "climax",
      text: "But I can promise you\u2019ll never have to face things alone. \u2764\uFE0F",
    },
    {
      id: "r-23",
      type: "paragraph",
      text: "Thank you for all the laughs, the card games, the late-night conversations, the chaos, and the memories.",
    },
    {
      id: "r-24",
      type: "paragraph",
      text: "I hope 16 becomes one of your best years yet.",
    },
    {
      id: "r-25",
      type: "paragraph",
      text: "And no matter how old you get, you\u2019ll always be one of my favourite people to annoy. \uD83D\uDE06\uD83D\uDC96",
    },
    {
      id: "r-26",
      type: "paragraph",
      text: "Happy Birthday, Anjali. \u2764\uFE0F\uD83C\uDF89",
    },
    {
      id: "r-27",
      type: "signature",
      text: "\u2014 Rishu \uD83D\uDE0E",
    },
  ],
};

export const bridgeText = "ADDITIONAL PERSONAL FILE DETECTED...";
