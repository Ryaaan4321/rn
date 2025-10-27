import { getNowPlaying } from "@/lib/spotify";

export async function GET() {
  try {
    const data = await getNowPlaying();
    return Response.json(data, { status: 200 });
  } catch (err:any) {
    console.error(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
