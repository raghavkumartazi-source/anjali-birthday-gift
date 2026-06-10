export type BootLineTone = "muted" | "scan" | "success";

export type FootageLineTone = "date" | "masthead" | "edition" | "claim" | "verdict";

export type DossierAccent = "green" | "amber" | "ice" | "red";

export type EvidenceItem = {
  id: string;
  evidenceNumber: string;
  src: string;
  alt: string;
  notes: string[];
  /** Use object-fit: contain instead of cover (for landscape / non-portrait shots) */
  contain?: boolean;
};

<<<<<<< HEAD
=======
export type DossierHero = {
  src: string;
  alt: string;
  preText: string[];
  closingStamp: string;
};

>>>>>>> dd1bcf5 (Update project)
export type DossierSection = {
  id: string;
  title: string;
  subtitle: string;
  classification: string;
  accent: DossierAccent;
  evidence: EvidenceItem[];
<<<<<<< HEAD
=======
  hero?: DossierHero;
>>>>>>> dd1bcf5 (Update project)
};

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
  caseFile: {
    id: "case-file",
    label: "ROOM 03",
    title: "CASE FILE: ANJALI",
    meta: [
      { label: "STATUS", value: "ICONIC" },
      { label: "DOB", value: "30 MAY 2010" },
      { label: "THREAT LEVEL", value: "MAXIMUM CUTENESS" },
      { label: "CLASSIFICATION", value: "TOP SECRET" },
    ],
    dossiers: [
      {
        id: "subject-profile",
        title: "SUBJECT PROFILE",
        subtitle: "Solo reconnaissance imagery",
        classification: "PRIORITY: HIGH",
        accent: "green",
        evidence: [
          {
            id: "ev-01",
            evidenceNumber: "01",
            src: "/photos/solo/photo_2026-06-09 14.16.50.jpeg",
            alt: "Subject solo photograph — appears innocent",
            notes: [
              "Subject appears innocent.",
              "Further investigation required.",
            ],
          },
          {
            id: "ev-02",
            evidenceNumber: "02",
            src: "/photos/solo/photo_2026-06-09 14.16.52.jpeg",
            alt: "Subject solo photograph — high fun levels",
            notes: [
              "Known to create unusually high levels of fun.",
            ],
          },
          {
            id: "ev-03",
            evidenceNumber: "03",
            src: "/photos/solo/photo_2026-06-09 14.16.53.jpeg",
            alt: "Subject solo photograph — unexplainable cuteness",
            notes: [
              "Experts remain unable to explain the cuteness.",
            ],
          },
          {
            id: "ev-04",
            evidenceNumber: "04",
            src: "/photos/solo/photo_2026-06-09 14.16.54.jpeg",
            alt: "Subject solo photograph — alarming confidence",
            notes: [
              "Subject demonstrates alarming levels of confidence.",
            ],
          },
          {
            id: "ev-05",
            evidenceNumber: "05",
            src: "/photos/solo/WhatsApp Image 2026-06-09 at 14.11.48.jpeg",
            alt: "Subject solo photograph — irresistible",
            notes: [
              "All attempts to resist have failed.",
            ],
          },
          {
            id: "ev-06",
            evidenceNumber: "06",
            src: "/photos/gang/WhatsApp Image 2026-06-09 at 14.11.48 (2).jpeg",
            alt: "Subject spotted among associates",
            notes: [
              "Subject spotted among associates.",
              "Individual impact: immeasurable.",
            ],
          },
        ] satisfies EvidenceItem[],
      },
      {
        id: "rishu-anjali",
        title: "DOSSIER: RISHU × ANJALI",
        subtitle: "Alliance under observation",
        classification: "RELATIONSHIP: PROTECTIVE CHAOS",
        accent: "amber",
        evidence: [
          {
            id: "ev-07",
            evidenceNumber: "07",
            src: "/photos/rishu/photo_2026-06-09 14.16.48.jpeg",
            alt: "Rishu and Anjali — Jaipur mission",
            notes: [
              "Subject assigned Rishu for protective custody during the Jaipur mission.",
              "Unexpected levels of trust detected.",
            ],
          },
          {
            id: "ev-08",
            evidenceNumber: "08",
            src: "/photos/rishu/IMG_6938.JPG",
            alt: "Rishu and Anjali — teasing tolerance",
            notes: [
              "Subject continues to tolerate unhealthy amounts of teasing.",
              "Researchers remain confused.",
            ],
          },
          {
            id: "ev-09",
            evidenceNumber: "09",
            src: "/photos/rishu/IMG_7320.JPG",
            alt: "Rishu and Anjali — unbreakable alliance",
            notes: [
<<<<<<< HEAD
              "Despite constant roasting, bad jokes, and questionable advice —",
              "the alliance remains strong.",
            ],
          },
        ] satisfies EvidenceItem[],
=======
              "Alliance durability test: passed.",
            ],
          },
        ] satisfies EvidenceItem[],
        hero: {
          src: "/photos/rishu/IMG_5818.jpg",
          alt: "Rishu and Anjali — the strongest evidence",
          preText: [
            "Despite constant roasting,",
            "bad jokes,",
            "and questionable advice —",
            "the alliance remains strong.",
          ],
          closingStamp: "DOSSIER COMPLETE",
        },
>>>>>>> dd1bcf5 (Update project)
      },
      {
        id: "ishu-anjali",
        title: "DOSSIER: ISHU × ANJALI",
        subtitle: "Sibling intelligence report",
        classification: "BOND STATUS: UNBREAKABLE",
        accent: "ice",
        evidence: [
          {
            id: "ev-10",
            evidenceNumber: "10",
            src: "/photos/ishu/photo_2026-06-09 14.16.56.jpeg",
            alt: "Ishu and Anjali — wisdom detected",
            notes: [
              "Witnesses report unusually high levels of wisdom.",
              "Strong sibling alliance detected.",
            ],
          },
          {
            id: "ev-11",
            evidenceNumber: "11",
            src: "/photos/ishu/WhatsApp Image 2026-06-09 at 14.11.47.jpeg",
            alt: "Ishu and Anjali — wholesome levels exceeded",
            notes: [
              "Levels of wholesomeness exceed measurement capacity.",
            ],
          },
          {
            id: "ev-12",
            evidenceNumber: "12",
            src: "/photos/ishu/WhatsApp Image 2026-06-09 at 14.11.49 (1).jpeg",
            alt: "Ishu and Anjali — bond assessment",
            notes: [
              "The bond appears unbreakable.",
              "No further analysis needed.",
            ],
          },
        ] satisfies EvidenceItem[],
      },
      {
        id: "the-gang",
        title: "THE GANG",
        subtitle: "All known associates",
        classification: "CHAOS LEVEL: MAXIMUM",
        accent: "red",
        evidence: [
          {
            id: "ev-13",
            evidenceNumber: "13",
            src: "/photos/gang/IMG_6755.JPG",
            alt: "The gang — all associates identified",
            contain: true,
            notes: [
              "All known associates identified.",
              "High levels of chaos detected.",
            ],
          },
          {
            id: "ev-14",
            evidenceNumber: "14",
            src: "/photos/gang/IMG_8653.JPG",
            alt: "The gang — no regrets",
            notes: [
              "Gang activity confirmed.",
              "No regrets reported.",
            ],
          },
          {
            id: "ev-15",
            evidenceNumber: "15",
            src: "/photos/gang/IMG_8659.JPG",
            alt: "The gang — synchronized chaos",
            notes: [
              "Synchronized chaos levels off the charts.",
            ],
          },
          {
            id: "ev-16",
            evidenceNumber: "16",
            src: "/photos/gang/IMG_8678.JPG",
            alt: "The gang — center of gravity",
            contain: true,
            notes: [
              "Subject appears to be the center of gravity.",
            ],
          },
          {
            id: "ev-17",
            evidenceNumber: "17",
            src: "/photos/gang/IMG_9014.JPG",
            alt: "The gang — unprecedented happiness",
            contain: true,
            notes: [
              "Collective happiness readings: unprecedented.",
            ],
          },
        ] satisfies EvidenceItem[],
      },
    ] satisfies DossierSection[],
    outro: {
      lines: [
        "All evidence examined.",
        "All associates identified.",
        "Conclusion: The subject is universally, irreversibly loved.",
      ],
      closing: "But the archive contains one more room...",
    },
  },
} as const;

export const roomEngineConfig = {
  scrollScreens: 3.8,
  minScrollDistance: 2400,
};
