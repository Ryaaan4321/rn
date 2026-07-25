import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { redis } from "@/lib/redis";

const ONE_DAY = 60 * 60 * 24;

const incrementViewsLua = `
local created = redis.call("SET", KEYS[1], "1", "NX", "EX", ARGV[1])

if created then
    return redis.call("INCR", KEYS[2])
end

return tonumber(redis.call("GET", KEYS[2]) or "0")
`;
export async function POST(req: NextRequest) {
  try {
    const { page } = await req.json();

    if (!page || typeof page !== "string") {
      return NextResponse.json(
        { error: "Page is required" },
        { status: 400 }
      );
    }
    const cookieStore = await cookies();
    let visitorId = cookieStore.get("visitor_id")?.value;
    let shouldSetCookie = false;
    if (!visitorId) {
      visitorId = randomUUID();
      shouldSetCookie = true;
    }
    const dedupeKey = `visited:${page}:${visitorId}`;
    const viewsKey = `views:${page}`;
    const views = await redis.eval<[string], number>(
      incrementViewsLua,
      [dedupeKey, viewsKey],
      [ONE_DAY.toString()]
    );
    const response = NextResponse.json({
      views: Number(views),
    });
    if (shouldSetCookie) {
      response.cookies.set("visitor_id", visitorId, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
      });
    }
    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}