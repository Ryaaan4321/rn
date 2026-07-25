const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
export interface WakaTimeStats {
  languages: Array<{
    name: string;
    percent: number;
    color: string;
  }>;
  total_seconds: number;
  daily_average: number;
}

export async function getWakaTimeStats(): Promise<WakaTimeStats | null> {
  if (!WAKATIME_API_KEY) return null;

  const encoded = Buffer.from(WAKATIME_API_KEY).toString("base64");

  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${encoded}`,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;
    const data = await res.json();

    return {
      languages: data.data.languages.slice(0, 6).map((l: any) => ({
        name: l.name,
        percent: l.percent,
        color: l.color,
      })),
      total_seconds: data.data.total_seconds,
      daily_average: data.data.daily_average,
    };
  } catch {
    return null;
  }
}