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
    } catch (err) {
      setTrack({ playing: false });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 150000); 
    return () => clearInterval(interval);
  }, []);
  if (loading) return <div>Loading Spotify info...</div>;
  if (!track.playing) {
    return <div>Not playing anything right now</div>;
  }
  console.log("track detais",track);
  return (
    <a
      href={track.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
    >
      {track.albumArt && (
        <img
          src={track.albumArt as string}
          alt={track.album}
          style={{ width: 64, height: 64, borderRadius: 4 }}
        />
      )}
      <div style={{ color: "#1DB954" }}>
        <div><strong>{track.song}</strong></div>
        <div>{track.artists}</div>
      </div>
    </a>
  );
}
