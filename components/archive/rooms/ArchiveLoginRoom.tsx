import type { archiveRooms } from "@/data/archive";

type ArchiveLoginRoomProps = {
  room: typeof archiveRooms.login;
};

export function ArchiveLoginRoom({ room }: ArchiveLoginRoomProps) {
  return (
    <div className="archive-login-shell" aria-label={room.title}>
      <div className="archive-terminal-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="archive-terminal">
        <p className="archive-room-label">{room.label}</p>

        <div className="archive-terminal-stack">
          {room.bootSequence.map((line) => (
            <p
              className={`boot-line boot-line-${line.tone}`}
              key={line.text}
            >
              {line.text}
            </p>
          ))}
        </div>

        <h1 className="access-granted">{room.accessText}</h1>
      </div>
    </div>
  );
}
