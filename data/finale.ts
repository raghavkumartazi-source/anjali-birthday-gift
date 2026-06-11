/* ── Scene 6 data structures (redesigned) ── */

/* ── Part 1: Photo reveal ── */

export const photoScanMessages = [
  "SCANNING ARCHIVE...",
  "UNCLASSIFIED FILE LOCATED",
  "RECONSTRUCTING IMAGE...",
  "FILE TYPE: CLASSIFIED PHOTOGRAPH",
  "RESTORING...",
];

export const secretPhotoSrc = "/photos/final/anjali-classified.jpg";

export const secretPhotoReactions = [
  "⚠ CLASSIFIED PHOTO LEAKED",
  "ATTEMPTING DELETION...",
  "DELETION FAILED",
  "TOO FUNNY TO REMOVE 😂",
];

/* ── Part 2: Gang Memories ── */

export type GangMemory = {
  label: string;
  value: string;
};

export const gangMemories: GangMemory[] = [
  { label: "MISSION: JAIPUR", value: "LEGENDARY" },
  { label: "UNO INCIDENT", value: "CONFIRMED CHEATING" },
  { label: "LATE NIGHT GOSSIP", value: "FULLY ARCHIVED" },
  { label: "CARD GAME SKILLS", value: "SUSPICIOUSLY GOOD" },
  { label: "CHAOS LEVEL", value: "EXTREME" },
  { label: "ROASTING TOLERANCE", value: "SUPERHUMAN" },
];

/* ── Part 3: Verdict ── */

export const verdictProcessing = [
  "ANALYZING SUBJECT...",
  "PROCESSING 847 MEMORIES...",
  "EVALUATING IMPACT ON THE GANG...",
  "COMPILING FINAL VERDICT...",
];

export const verdictResult =
  "THE ONE PERSON WHO MAKES EVERY MOMENT BETTER";

/* ── Part 4: Birthday ── */

export const birthdayCoda = [
  "Thanks for making the archive worth saving.",
  "More adventures coming soon.",
  "— Rishu, Ishu & The Gang ❤️",
];

/* ── Part 5: Terminal shutdown ── */

export const shutdownChecklist = [
  "SOLO FILES ✓",
  "JAIPUR MISSION ✓",
  "RECOVERED FOOTAGE ✓",
  "GANG RECORDS ✓",
  "PERSONAL LETTERS ✓",
  "16 REASONS ARCHIVED ✓",
  "INVESTIGATION COMPLETE ✓",
];

export const terminalLines = [
  "CASE CLOSED",
  "ARCHIVE SAVED",
  "SESSION COMPLETE",
  "",
  "See you in the next adventure.",
];
