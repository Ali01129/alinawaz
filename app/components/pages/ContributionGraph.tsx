"use client";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";
import { github } from "@/app/data/contribution-graph-theme";
import { useState, useEffect } from "react";
import YearButton from "../shared/YearButton";
import { getGitHubYears } from "@/app/utils/calculate-years";
import EmptyState from "../shared/EmptyState";

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();
  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  // Defer calendar render until after mount — react-github-calendar fetches
  // contribution data and produces different HTML on server vs client.
  useEffect(() => {
    setMounted(true);
  }, []);

  const today = new Date().getFullYear();
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear)
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );

  return (
    <div className="flex xl:flex-row flex-col gap-4">
      <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit min-h-[197px] min-w-[300px]">
        {mounted ? (
          <GitHubCalendar
            username={username}
            theme={github}
            colorScheme={scheme === "dark" ? "dark" : "light"}
            blockSize={13}
            year={calendarYear}
          />
        ) : null}
      </div>
      <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
        {/* Display only the last five years */}
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))}
      </div>
    </div>
  );
}
