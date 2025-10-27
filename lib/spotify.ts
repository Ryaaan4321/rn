import qs from 'qs'
const client_id = process.env.SPOTIFY_CLIENT_ID
const secret = process.env.SPOTIFY_SECRET
export async function getAccessToken() {
    const basic = Buffer.from(`${client_id}:${secret}`).toString("base64");
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: qs.stringify({
            grant_type: "refresh_token",
            refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
        })
    })
    const data = await res.json();
    if (!res.ok) {
        throw new Error(JSON.stringify(data));
    }
    return data.access_token
}
export async function getNowPlaying() {
    const access_token = await getAccessToken();
    console.log("acess token = ",access_token);
    const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    if (res.status == 204 || res.status > 400) {
        return { playing: false }
    }
    const data = await res.json();
    return {
        playing: data.is_playing,
        song: data.item.album.name,
        artists: data.item.artists.map((a:any) => a.name).join(", "),
        album: data.item.album.name,
        albumArt: data.item.album.images[0].url,
        spotifyUrl: data.item.external_urls.spotify,
        progress_ms: data.progress_ms,
        duration_ms: data.duration_ms,
    };
}

