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
  const [isHovered, setIsHovered] = useState(false)
  const fetchNowPlaying = async () => {
    try {
      const res = await fetch("/api/spotify/now-playing");
      const data = await res.json();
      setTrack(data);
    } catch (err) {
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
  if (loading) return <div>Loading Spotify info...</div>;
  if (!track.playing) {
    return (
      <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-muted/30 border border-border/30 backdrop-blur-sm">
        <div className="w-8 h-8 rounded-md bg-muted/50 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-muted-foreground/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
        <div className="hidden sm:flex flex-col gap-0.5">
          <div className="text-xs font-medium text-muted-foreground/70 tracking-tight">Not playing</div>
          <div className="text-[10px] text-muted-foreground/50 tracking-wide">Spotify</div>
        </div>
      </div>
    )
  }
  console.log("track detais", track);
  return (
    <a
      href={track.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-4 right-4 z-50 group flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-br from-background to-background border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 backdrop-blur-sm w-fit sm:w-auto"
    >
      {track.albumArt && (
        <div className="relative flex-shrink-0">
          <img
            src={track.albumArt || "/placeholder.svg"}
            alt={track.album}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover shadow-md transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"
              }`}
          />


          <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        </div>
      )}

      <div className="hidden sm:flex flex-col gap-1 min-w-0">
        <div className="text-sm font-semibold text-foreground truncate max-w-[120px] md:max-w-[160px] group-hover:text-primary transition-colors duration-500 tracking-tight leading-tight">
          {track.song}
        </div>
        <div className="text-xs text-muted-foreground truncate max-w-[120px] md:max-w-[160px] font-light tracking-wide">
          {track.artists}
        </div>
      </div>

      <div className="ml-1 flex items-center justify-center gap-0.5 sm:gap-1">
        {[0, 0.1, 0.2].map((delay, i) => (
          <span
            key={i}
            className="w-0.5 sm:w-1 bg-gradient-to-t from-primary to-primary/70 rounded-full transition-all duration-300"
            style={{
              height: isHovered ? "16px" : "10px",
              animation: `spotify-bar 0.8s ease-in-out infinite ${delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes spotify-bar {
          0%, 100% { opacity: 0.5; transform: scaleY(0.7); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </a>
  );
}