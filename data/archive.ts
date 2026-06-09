export type BootLineTone = "muted" | "scan" | "success";

export type FootageLineTone = "date" | "masthead" | "edition" | "claim" | "verdict";

export const archiveRooms = {
  login: {
    id: "archive-login",
    label: "ROOM 01",
    title: "Archive Login",
    bootSequence: [
      { text: "Connecting to Gang Archives...", tone: "muted" },
      { text: "Searching Records...", tone: "scan" },
      { text: "Birthday Girl Anjali Detected ✅", tone: "success" },
    ] satisfies Array<{ text: string; tone: BootLineTone }>,
    accessText: "ACCESS GRANTED",
  },
  footage: {
    id: "recovered-footage",
    label: "ROOM 02",
    title: "Recovered Footage",
    video: {
      src: "/videos/birthday.mp4",
      type: "video/mp4",
      label: "Recovered birthday cake cutting footage",
    },
    revealSequence: [
      { text: "30 MAY 2026", tone: "date" },
      { text: "THE COUSIN GAZETTE", tone: "masthead" },
      { text: "SPECIAL BIRTHDAY EDITION", tone: "edition" },
      { text: "MOST ICONIC PERSON IN THE GANG", tone: "claim" },
      { text: "OFFICIALLY TURNS 16 🎉", tone: "verdict" },
    ] satisfies Array<{ text: string; tone: FootageLineTone }>,
    finalLine: "The investigation begins...",
  },
} as const;

export const roomEngineConfig = {
  scrollScreens: 3.8,
  minScrollDistance: 2400,
};
