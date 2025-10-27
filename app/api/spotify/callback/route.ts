import querystring from "querystring";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
  if (!code) {
    return NextResponse.json({ error: "No code received from Spotify" }, { status: 400 });
  }
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET}`
  ).toString("base64");
  const body = querystring.stringify({
    grant_type: "authorization_code",
    code,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
  });
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("Spotify token error:", data);
      return NextResponse.json({ error: data }, { status: 500 });
    }
    return NextResponse.redirect("https://localhost:3000/?spotify=connected");
  } catch (err:any) {
    console.error(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
