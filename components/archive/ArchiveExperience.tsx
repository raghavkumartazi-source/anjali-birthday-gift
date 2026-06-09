"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { archiveRooms, roomEngineConfig } from "@/data/archive";
import { ArchiveLoginRoom } from "@/components/archive/rooms/ArchiveLoginRoom";
import { RecoveredFootageRoom } from "@/components/archive/rooms/RecoveredFootageRoom";

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

  return (
    <main
      ref={rootRef}
      className="archive-experience"
      aria-label="Anjali birthday secret archive"
    >
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
    </main>
  );
}
