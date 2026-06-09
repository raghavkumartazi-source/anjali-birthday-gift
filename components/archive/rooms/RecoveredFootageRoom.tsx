import { forwardRef } from "react";
import type { archiveRooms } from "@/data/archive";

type RecoveredFootageRoomProps = {
  room: typeof archiveRooms.footage;
};

export const RecoveredFootageRoom = forwardRef<
  HTMLVideoElement,
  RecoveredFootageRoomProps
>(function RecoveredFootageRoom({ room }, videoRef) {
  return (
    <div className="footage-room-shell" aria-label={room.title}>
      <div className="footage-room-hud" aria-hidden="true">
        <span>{room.label}</span>
        <span>{room.title}</span>
      </div>

      <div className="footage-exhibit">
        <div className="footage-field" aria-hidden="true" />

        <div className="footage-frame">
          <video
            ref={videoRef}
            className="footage-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={room.video.label}
          >
            <source src={room.video.src} type={room.video.type} />
            Your browser does not support the video tag.
          </video>

          <div className="footage-glass" aria-hidden="true" />

          <div className="footage-copy">
            {room.revealSequence.map((line) => (
              <p
                className={`footage-copy-line footage-copy-${line.tone}`}
                key={line.text}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>

        <p className="investigation-line">{room.finalLine}</p>
      </div>
    </div>
  );
});
