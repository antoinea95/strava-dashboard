"use client";

import { useIsClient } from "@/app/utils/hooks";
import { StravaTotal } from "@/app/types/schema";
import { Area, AreaChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { Cairo } from "next/font/google";
const cairo = Cairo({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const WeekChart = ({ data }: { data: StravaTotal[] }) => {
  const isClient = useIsClient();

  if (!isClient) {
    return <p className="chart-loader">Loading ...</p>;
  }

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<ValueType, NameType>) => {
    if (active) {
      return (
        <div className="chart-tooltip">
          <p className={cairo.className}>{`${payload?.[0].value} KM`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer minWidth={380} height={100} width="100%">
    <AreaChart
      data={data}
      margin={{ top: 0, right: 60, left: 5, bottom: 10 }}
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#fc4c01" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#fc4c01" stopOpacity={0} />
        </linearGradient>
      </defs>
      <YAxis
        stroke="#fc4c01"
        strokeWidth={1}
        tickSize={3}
        tickMargin={10}
        type="number"
        fontWeight={900}
        fontSize={12}
      />
      <XAxis
        dataKey="date"
        stroke="#fc4c01"
        strokeWidth={1}
        fontSize={12}
        tickSize={3}
        tickMargin={15}
        fontWeight={900}
        fontStyle={12}
      />
      <Tooltip content={<CustomTooltip />} />
      <Area
        type="linear"
        dataKey="kilometers"
        stroke="#fc4c01"
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#gradient)"
      />
    </AreaChart>
    </ResponsiveContainer>
  );
};
