import React from "react";
import { format, addDays, startOfWeek, differenceInWeeks } from "date-fns";
import clsx from "clsx";

export interface HeatmapProps {
  /** Start date of the heatmap (inclusive) */
  startDate: Date;
  /** End date of the heatmap (inclusive), defaults to today */
  endDate?: Date;
  /** Mapping of date strings (yyyy-MM-dd) to numeric counts */
  values: Record<string, number>;
  /** Tailwind CSS utility classes for color at increasing intensity */
  colorScale?: string[];
}

// Default color scale: from light gray to blue shades
const defaultColors = [
  "bg-gray-200",
  "bg-blue-100",
  "bg-blue-300",
  "bg-blue-500",
  "bg-blue-700",
];

export const Heatmap: React.FC<HeatmapProps> = ({
  startDate,
  endDate = new Date(),
  values,
  colorScale = defaultColors,
}) => {
  // Align start and end to the beginning of the week (Sunday)
  const start = startOfWeek(startDate, { weekStartsOn: 0 });
  const end = startOfWeek(endDate, { weekStartsOn: 0 });
  const weekCount = differenceInWeeks(end, start) + 1;

  // Find the maximum count for scaling
  const maxCount = Math.max(...Object.values(values), 0);

  // Precompute grid of days
  const grid = Array.from({ length: 7 }).map((_, dayIndex) =>
    Array.from({ length: weekCount }).map((_, weekIndex) => {
      const date = addDays(start, weekIndex * 7 + dayIndex);
      const key = format(date, "yyyy-MM-dd");
      const count = values[key] || 0;

      // Determine color intensity index
      let colorIndex = 0;
      if (maxCount > 0) {
        const ratio = count / maxCount;
        colorIndex = Math.floor(ratio * (colorScale.length - 1));
      }

      return { date, count, colorClass: colorScale[colorIndex] };
    })
  );

  return (
    <div className="flex select-none">
      {Array.from({ length: weekCount }).map((_, weekIndex) => (
        <div key={weekIndex} className="flex flex-col space-y-1 gap-1 items-center">
          {Array.from({ length: 7 }).map((_, dayIndex) => {
            const { date, count, colorClass } = grid[dayIndex][weekIndex];
            return (
              <div
                key={dayIndex}
                className={clsx(
                  "w-4 h-4 rounded-sm transition-colors",
                  colorClass
                )}
                title={`${format(date, "MMM d, yyyy")}: ${count}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
