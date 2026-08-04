import { getWakaTimeStats } from "@/lib/wakatime";

export async function WakaTimeStats() {
  const stats = await getWakaTimeStats();

  if (!stats) return null;

  const totalHours = Math.round(stats.total_seconds / 3600);
  const dailyHours = (stats.daily_average / 3600).toFixed(1);

  return (
    <div className="w-full">
      <h3 className="text-base font-medium text-[#F2F2F2] tracking-[-0.15px] mb-6 uppercase">
        Weekly Coding Stats
      </h3>

      <div className="flex flex-col gap-3.5">
        {stats.languages.map((lang) => (
          <div key={lang.name} className="flex items-center gap-3">
            <span className="text-xs text-[#A8A8A8] w-20 tracking-[-0.15px] shrink-0">
              {lang.name}
            </span>
            <div className="flex-1 h-1.5 bg-[#141414] overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${lang.percent}%`,
                  backgroundColor: lang.color || "#6E6E6E",
                }}
              />
            </div>
            <span className="text-xs text-[#6E6E6E] w-10 text-right tracking-[-0.15px] shrink-0">
              {lang.percent.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex items-center gap-4">
        <span className="text-xs text-[#6E6E6E] tracking-[-0.15px]">
          {totalHours} hrs total
        </span>
        <span className="text-[#1f1f1f]">·</span>
        <span className="text-xs text-[#6E6E6E] tracking-[-0.15px]">
          {dailyHours} hrs/day avg
        </span>
      </div>
    </div>
  );
}