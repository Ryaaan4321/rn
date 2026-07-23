"use client";

import { useEffect, useState } from "react";

interface NowPlaying {
  playing: boolean;
  song?: string;
  artists?: string;
  album?: string;
  albumArt?: string | null;
  spotifyUrl?: string;
}

export default function SpotifyWidget() {
  const [track, setTrack] = useState<NowPlaying>({ playing: false });
  const [loading, setLoading] = useState(true);

  const fetchNowPlaying = async () => {
    try {
      const res = await fetch("/api/spotify/now-playing");
      const data = await res.json();
      setTrack(data);
    } catch {
      setTrack({ playing: false });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  if (!track.playing) {
    return (
      <div className="flex items-center gap-2.5 px-3 py-2 border border-[#1f1f1f] bg-[#141414]">
        <div className="w-8 h-8 bg-[#0c0c0c] border border-[#1f1f1f] flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-[#6E6E6E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
        <div className="hidden sm:flex flex-col gap-0.5">
          <span className="text-xs text-[#6E6E6E] tracking-[-0.15px]">Not playing</span>
          <span className="text-[10px] text-[#444] tracking-[-0.15px]">Spotify</span>
        </div>
      </div>
    );
  }

  return (
    <a
      href={track.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-3 py-2 border border-[#1f1f1f] bg-[#141414] hover:border-[#2a2a2a] transition-all duration-300 group"
    >
      {track.albumArt && (
        <img
          src={track.albumArt}
          alt={track.album}
          className="w-8 h-8 sm:w-10 sm:h-10 object-cover flex-shrink-0"
        />
      )}

      <div className="hidden sm:flex flex-col gap-0.5 min-w-0">
        <span className="text-xs text-[#F2F2F2] tracking-[-0.15px] truncate max-w-[140px] group-hover:text-[#A8A8A8] transition-colors">
          {track.song}
        </span>
        <span className="text-[10px] text-[#6E6E6E] tracking-[-0.15px] truncate max-w-[140px]">
          {track.artists}
        </span>
      </div>

      {/* Playing indicator bars */}
      <div className="ml-1 flex items-end gap-[2px] h-3">
        {[0, 0.15, 0.3].map((delay) => (
          <span
            key={delay}
            className="w-[2px] bg-[#6E6E6E] group-hover:bg-[#A8A8A8] transition-colors"
            style={{
              height: "100%",
              animation: `spotify-bar 0.8s ease-in-out infinite ${delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes spotify-bar {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </a>
  );
}