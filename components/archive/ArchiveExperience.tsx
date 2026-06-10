"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { archiveRooms, roomEngineConfig } from "@/data/archive";
import { ArchiveLoginRoom } from "@/components/archive/rooms/ArchiveLoginRoom";
import { RecoveredFootageRoom } from "@/components/archive/rooms/RecoveredFootageRoom";
import { CaseFileRoom } from "@/components/archive/rooms/CaseFileRoom";
import { DeckRoom } from "@/components/archive/rooms/DeckRoom";
import { LetterRoom } from "@/components/archive/rooms/LetterRoom";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ArchiveExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.09,
      touchMultiplier: 1.12,
      wheelMultiplier: 0.86,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  /* ──────────────────────────────────────────────
     SCENE 1 + 2 — Pinned timeline (UNTOUCHED)
     ────────────────────────────────────────────── */

  useGSAP(
    () => {
      const root = rootRef.current;
      const pin = pinRef.current;

      if (!root || !pin) {
        return;
      }

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(
          [
            ".archive-room",
            ".boot-line",
            ".access-granted",
            ".footage-copy-line",
            ".investigation-line",
          ],
          { autoAlpha: 1, y: 0, filter: "blur(0px)" },
        );
        gsap.set(".archive-room-login", { display: "none" });
        gsap.set(".archive-room-footage", { scale: 1, z: 0 });
        return;
      }

      const bootLines = gsap.utils.toArray<HTMLElement>(".boot-line");
      const copyLines = gsap.utils.toArray<HTMLElement>(".footage-copy-line");

      gsap.set(".archive-room-login", { autoAlpha: 1, z: 0, scale: 1 });
      gsap.set(".archive-room-footage", {
        autoAlpha: 0,
        z: -760,
        scale: 0.72,
        rotateX: 8,
      });
      gsap.set(bootLines, { autoAlpha: 0, y: 14 });
      gsap.set(bootLines[0], { autoAlpha: 1, y: 0 });
      gsap.set(".access-granted", { autoAlpha: 0, y: 18, scale: 0.92 });
      gsap.set(".archive-aperture", { autoAlpha: 0, scale: 0.04 });
      gsap.set(".footage-frame", { y: 56, scale: 0.84, rotateX: 8 });
      gsap.set(".footage-copy-line", {
        autoAlpha: 0,
        y: 18,
        filter: "blur(10px)",
      });
      gsap.set(".investigation-line", { autoAlpha: 0, y: 16 });
      gsap.set(".archive-forward-wash", { autoAlpha: 0, scale: 0.96 });
      gsap.set(".archive-progress-fill", { scaleY: 0 });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          pin,
          start: "top top",
          end: () =>
            `+=${Math.max(
              window.innerHeight * roomEngineConfig.scrollScreens,
              roomEngineConfig.minScrollDistance,
            )}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        ".archive-progress-fill",
        { scaleY: 1, duration: 1.72 },
        0,
      );

      timeline.to(
        ".archive-depth-grid",
        { opacity: 0.58, scale: 1.38, y: -70, duration: 0.7 },
        0,
      );

      timeline.to(
        bootLines.slice(1),
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.09,
          stagger: 0.09,
          ease: "power2.out",
        },
        0.08,
      );

      timeline.to(
        ".access-granted",
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.14, ease: "back.out(2)" },
        0.37,
      );

      timeline.to(
        ".archive-login-shell",
        { z: 220, scale: 1.08, duration: 0.12, ease: "power2.inOut" },
        0.45,
      );

      timeline.to(
        ".archive-aperture",
        { autoAlpha: 1, scale: 1, duration: 0.001 },
        0.48,
      );

      timeline.to(
        ".archive-aperture",
        { scale: 28, duration: 0.28, ease: "power3.inOut" },
        0.49,
      );

      timeline.to(
        ".archive-room-login",
        {
          autoAlpha: 0,
          z: 860,
          scale: 1.58,
          duration: 0.18,
          ease: "power3.in",
        },
        0.48,
      );

      timeline.to(
        ".archive-room-footage",
        {
          autoAlpha: 1,
          z: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.36,
          ease: "power3.out",
        },
        0.53,
      );

      timeline.call(
        () => {
          void videoRef.current?.play().catch(() => undefined);
        },
        [],
        0.58,
      );

      timeline.to(
        ".footage-frame",
        { y: 0, scale: 1, rotateX: 0, duration: 0.34, ease: "power3.out" },
        0.56,
      );

      timeline.to(
        ".footage-field",
        { opacity: 0.68, scale: 1.12, duration: 0.56, ease: "power1.out" },
        0.56,
      );

      timeline.to(".archive-aperture", { autoAlpha: 0, duration: 0.12 }, 0.76);

      copyLines.forEach((line, index) => {
        const start = 0.83 + index * 0.12;

        timeline.to(
          line,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.1,
            ease: "power2.out",
          },
          start,
        );

        if (index > 0) {
          timeline.to(
            copyLines[index - 1],
            { autoAlpha: index < 3 ? 0.62 : 0.8, duration: 0.08 },
            start,
          );
        }
      });

      timeline.to(
        ".footage-frame",
        { y: -18, scale: 1.045, duration: 0.55, ease: "none" },
        0.84,
      );

      timeline.to(
        ".investigation-line",
        { autoAlpha: 1, y: 0, duration: 0.1, ease: "power2.out" },
        1.43,
      );

      timeline.to(
        ".archive-room-footage",
        { z: 270, scale: 1.16, duration: 0.22, ease: "power2.in" },
        1.55,
      );

      timeline.to(
        ".archive-forward-wash",
        { autoAlpha: 1, scale: 1.08, duration: 0.17, ease: "power2.in" },
        1.58,
      );
    },
    { scope: rootRef },
  );

  /* ──────────────────────────────────────────────
     SCENE 3 — Case File scroll animations
     ────────────────────────────────────────────── */

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(
          [
            ".casefile-stamp",
            ".casefile-meta-line",
            ".casefile-declassified",
            ".dossier-tab-rule",
            ".dossier-tab-title",
            ".dossier-tab-classification",
            ".evidence-number",
            ".evidence-marker",
            ".evidence-note",
            ".casefile-outro-line",
            ".dossier-hero-line",
            ".dossier-hero-frame",
            ".dossier-hero-stamp",
          ],
          { autoAlpha: 1, y: 0, scale: 1 },
        );
        gsap.set(".evidence-redact-bar", { scaleX: 0 });
        gsap.set(".evidence-photo", { scale: 1 });
        return;
      }

      /* ── Initial states ── */

      gsap.set(".casefile-stamp", { autoAlpha: 0, scale: 1.3, rotation: 3 });
      gsap.set(".casefile-meta-line", { autoAlpha: 0, y: 12 });
      gsap.set(".casefile-declassified", {
        autoAlpha: 0,
        scale: 0.8,
        rotation: 0,
      });
      gsap.set(".dossier-tab-rule", { scaleX: 0 });
      gsap.set(".dossier-tab-title", { autoAlpha: 0, y: 20 });
      gsap.set(".dossier-tab-classification", { autoAlpha: 0, y: 10 });
      gsap.set(".evidence-number", { autoAlpha: 0, y: 14 });
      gsap.set(".evidence-redact-bar", { scaleX: 1 });
      gsap.set(".evidence-photo", { scale: 1.08 });
      gsap.set(".evidence-marker", { scale: 0 });
      gsap.set(".evidence-note", { autoAlpha: 0, y: 10 });
      gsap.set(".casefile-outro-line", { autoAlpha: 0, y: 16 });
      gsap.set(".dossier-hero-line", { autoAlpha: 0, y: 14 });
      gsap.set(".dossier-hero-frame", { autoAlpha: 0, y: 30, scale: 0.95 });
      gsap.set(".dossier-hero-stamp", { autoAlpha: 0, y: 10 });

      /* ── Case file entry — pinned stamp reveal ── */

      const entryTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".casefile-entry",
          pin: true,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          anticipatePin: 1,
        },
      });

      entryTl.to(
        ".casefile-stamp",
        {
          autoAlpha: 1,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "back.out(2.5)",
        },
        0,
      );

      entryTl.to(
        ".casefile-meta-line",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.12,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.3,
      );

      entryTl.to(
        ".casefile-declassified",
        {
          autoAlpha: 0.7,
          scale: 1,
          rotation: -12,
          duration: 0.3,
          ease: "power3.out",
        },
        0.6,
      );

      /* ── Dossier tab pins ── */

      gsap.utils.toArray<HTMLElement>(".dossier-tab").forEach((tab) => {
        const tabTl = gsap.timeline({
          scrollTrigger: {
            trigger: tab,
            pin: true,
            start: "top top",
            end: "+=60%",
            scrub: 1,
            anticipatePin: 1,
          },
        });

        const rule = tab.querySelector(".dossier-tab-rule");
        const title = tab.querySelector(".dossier-tab-title");
        const classification = tab.querySelector(".dossier-tab-classification");

        if (rule) {
          tabTl.to(
            rule,
            { scaleX: 1, duration: 0.35, ease: "power2.inOut" },
            0,
          );
        }

        if (title) {
          tabTl.to(
            title,
            { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" },
            0.2,
          );
        }

        if (classification) {
          tabTl.to(
            classification,
            { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" },
            0.45,
          );
        }
      });

      /* ── Evidence item reveals ── */

      gsap.utils.toArray<HTMLElement>(".casefile-evidence").forEach((item) => {
        const bars = item.querySelectorAll(".evidence-redact-bar");
        const photo = item.querySelector(".evidence-photo");
        const markers = item.querySelectorAll(".evidence-marker");
        const notes = item.querySelectorAll(".evidence-note");
        const number = item.querySelector(".evidence-number");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            end: "top 18%",
            scrub: 0.6,
          },
        });

        // Evidence number appears
        if (number) {
          tl.to(
            number,
            { autoAlpha: 1, y: 0, duration: 0.12, ease: "power2.out" },
            0,
          );
        }

        // Redaction bars slide apart (photo already visible underneath)
        if (bars.length) {
          tl.to(
            bars,
            { scaleX: 0, duration: 0.4, stagger: 0.03, ease: "power3.inOut" },
            0.08,
          );
        }

        // Photo zoom settle
        if (photo) {
          tl.to(
            photo,
            { scale: 1, duration: 0.5, ease: "power2.out" },
            0.08,
          );
        }

        // Corner markers pop in
        if (markers.length) {
          tl.to(
            markers,
            { scale: 1, duration: 0.12, stagger: 0.025, ease: "back.out(3)" },
            0.42,
          );
        }

        // Investigation notes
        if (notes.length) {
          tl.to(
            notes,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.1,
              stagger: 0.06,
              ease: "power2.out",
            },
            0.52,
          );
        }
      });

      /* ── Dossier hero reveal ── */

      gsap.utils.toArray<HTMLElement>(".dossier-hero").forEach((hero) => {
        const heroLines = hero.querySelectorAll(".dossier-hero-line");
        const heroFrame = hero.querySelector(".dossier-hero-frame");
        const heroStamp = hero.querySelector(".dossier-hero-stamp");

        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top 78%",
            end: "top 10%",
            scrub: 0.8,
          },
        });

        // Pre-text lines fade in one by one
        if (heroLines.length) {
          heroTl.to(
            heroLines,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.12,
              stagger: 0.1,
              ease: "power2.out",
            },
            0,
          );
        }

        // Hero photo rises into frame — cinematic settle
        if (heroFrame) {
          heroTl.to(
            heroFrame,
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
            },
            0.35,
          );
        }

        // DOSSIER COMPLETE stamp
        if (heroStamp) {
          heroTl.to(
            heroStamp,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.15,
              ease: "power2.out",
            },
            0.75,
          );
        }
      });

      /* ── Outro reveal ── */

      const outroLines =
        gsap.utils.toArray<HTMLElement>(".casefile-outro-line");

      if (outroLines.length) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".casefile-outro",
            start: "top 72%",
            end: "top 28%",
            scrub: 1,
          },
        }).to(outroLines, {
          autoAlpha: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.15,
          ease: "power2.out",
        });
      }
    },
    { scope: rootRef },
  );

  /* ──────────────────────────────────────────────
     SCENE 4 — Deck of Evidence (pinned single-card)
     ────────────────────────────────────────────── */

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(".deck-card", { opacity: 1 });
        gsap.set(".deck-card-inner", { rotateY: 180 });
        return;
      }

      /* ── Intro reveal ── */

      gsap.set(".deck-intro-label", { autoAlpha: 0, y: 10 });
      gsap.set(".deck-intro-title", { autoAlpha: 0, y: 20 });
      gsap.set(".deck-intro-sub", { autoAlpha: 0, y: 12 });

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".deck-intro",
          start: "top 70%",
          end: "top 18%",
          scrub: 1,
        },
      });

      introTl.to(
        ".deck-intro-label",
        { autoAlpha: 1, y: 0, duration: 0.2, ease: "power2.out" },
        0,
      );
      introTl.to(
        ".deck-intro-title",
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" },
        0.15,
      );
      introTl.to(
        ".deck-intro-sub",
        { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" },
        0.4,
      );

      /* ── Pinned card dealing ── */

      const cards = gsap.utils.toArray<HTMLElement>(".deck-card");
      const totalCards = cards.length;

      // All cards start invisible, below, and un-flipped
      gsap.set(cards, { opacity: 0, y: "35vh", rotateX: 12 });
      gsap.set(".deck-card-inner", { rotateY: 0 });
      gsap.set(".deck-wash", { opacity: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".deck-stage",
          pin: true,
          start: "top top",
          end: `+=${totalCards * 150}%`,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Each card gets a 4-phase sequence
      // Phase durations within each card's time budget (1 unit per card)
      cards.forEach((card, i) => {
        const inner = card.querySelector(".deck-card-inner");
        const isFinal = card.classList.contains("deck-card--final");
        const t = i; // timeline position for this card

        // Phase 1: Card enters — rises from below, fades in
        timeline.to(
          card,
          {
            opacity: 1,
            y: "0vh",
            rotateX: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          t,
        );

        // Phase 2: Card flips — rotateY 180 reveals the front face
        if (inner) {
          timeline.to(
            inner,
            {
              rotateY: 180,
              duration: 0.35,
              ease: "power3.inOut",
            },
            t + 0.2,
          );
        }

        // Phase 3 & 4: Hold, then exit (or hold + wash for final)
        if (isFinal) {
          // Final card: glow intensifies, then wash
          timeline.to(
            card,
            {
              boxShadow:
                "0 0 3rem rgba(245,200,111,0.3), 0 0 6rem rgba(245,200,111,0.1)",
              duration: 0.3,
            },
            t + 0.7,
          );
          timeline.to(
            ".deck-wash",
            { opacity: 1, duration: 0.25, ease: "power2.in" },
            t + 0.9,
          );
        } else {
          // Normal cards: fly upward and fade out
          timeline.to(
            card,
            {
              opacity: 0,
              y: "-30vh",
              rotateX: -8,
              duration: 0.2,
              ease: "power2.in",
            },
            t + 0.75,
          );
        }
      });
    },
    { scope: rootRef },
  );

  /* ──────────────────────────────────────────────
     SCENE 5 — The Letter Room
     ────────────────────────────────────────────── */

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      /* ── Letter blocks: gentle fade-in ── */

      const allBlocks = gsap.utils.toArray<HTMLElement>(".letter-block");
      const bridgeEl = root.querySelector(".letter-bridge-text");
      const headerEls = gsap.utils.toArray<HTMLElement>(".letter-header");

      if (reducedMotion) {
        gsap.set([...allBlocks, ...headerEls], { autoAlpha: 1, y: 0 });
        if (bridgeEl) gsap.set(bridgeEl, { autoAlpha: 1, y: 0 });
        return;
      }

      // Initial states
      gsap.set(allBlocks, { autoAlpha: 0, y: 18 });
      gsap.set(headerEls, { autoAlpha: 0, y: 14 });
      if (bridgeEl) gsap.set(bridgeEl, { autoAlpha: 0, y: 10 });

      // Letter headers
      headerEls.forEach((header) => {
        gsap.to(header, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 78%",
            end: "top 50%",
            scrub: 1,
          },
        });
      });

      // Each paragraph/hero/climax block
      allBlocks.forEach((block) => {
        const blockType = block.getAttribute("data-block-type");
        const isClimax = blockType === "climax";

        gsap.to(block, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 82%",
            end: "top 55%",
            scrub: 1,
          },
        });

        // Climax line: pin briefly so the experience holds
        if (isClimax) {
          ScrollTrigger.create({
            trigger: block,
            start: "center center",
            end: "+=60%",
            pin: true,
            pinSpacing: true,
          });
        }
      });

      // Bridge transition
      if (bridgeEl) {
        gsap.to(bridgeEl, {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bridgeEl,
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
          },
        });
      }
    },
    { scope: rootRef },
  );

  return (
    <main
      ref={rootRef}
      className="archive-experience"
      aria-label="Anjali birthday secret archive"
    >
      {/* ── Scenes 1 + 2 — pinned ── */}
      <div ref={pinRef} className="archive-pin">
        <div className="archive-backdrop" aria-hidden="true">
          <div className="archive-depth-grid" />
          <div className="archive-scanlines" />
          <div className="archive-noise" />
        </div>

        <div className="archive-camera">
          <div className="archive-room archive-room-login">
            <ArchiveLoginRoom room={archiveRooms.login} />
          </div>

          <div className="archive-room archive-room-footage">
            <RecoveredFootageRoom ref={videoRef} room={archiveRooms.footage} />
          </div>
        </div>

        <div className="archive-aperture" aria-hidden="true" />
        <div className="archive-forward-wash" aria-hidden="true" />

        <div className="archive-progress" aria-hidden="true">
          <span className="archive-progress-fill" />
        </div>
      </div>

      {/* ── Scene 3 — Case File ── */}
      <CaseFileRoom caseFile={archiveRooms.caseFile} />

      {/* ── Scene 4 — Deck of Evidence ── */}
      <DeckRoom />

      {/* ── Scene 5 — Letter Room ── */}
      <LetterRoom />
    </main>
  );
}
