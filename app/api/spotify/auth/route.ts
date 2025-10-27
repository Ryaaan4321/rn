import qs from "querystring";
import { NextResponse } from "next/server";

export async function GET() {
  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state"
  ].join(" ");

  const params = qs.stringify({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scopes,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI
  });
  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${params}`;
  return NextResponse.redirect(spotifyAuthUrl);
}
