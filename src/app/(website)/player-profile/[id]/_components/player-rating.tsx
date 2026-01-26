
import React from 'react'
import { UserProfile } from './player-data-type';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  type LabelProps,
} from "recharts"

import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import PlayerRatingSkeleton from './player-rating-skeleton';


const CustomBarLabel: React.FC<LabelProps> = ({
  x,
  y,
  width,
  value,
}) => {
  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    typeof width !== "number" ||
    typeof value !== "number"
  ) {
    return null
  }

  return (
    <foreignObject
      x={x + width / 2 - 18}
      y={y - 28}
      width={36}
      height={24}
    >
      <div className="flex items-center justify-center rounded-[4px] bg-primary px-2 py-1 text-xs font-normal leading-[150%] text-white">
        {value}
      </div>
    </foreignObject>
  )
}


const chartConfig = {
  desktop: {
    label: "Rating",
    color: "#4674B7",
  },
} satisfies ChartConfig


const PlayerRating = ({
    data,
    isLoading,
    error,
    isError,
}: {
    data?: UserProfile
    isLoading: boolean
    error: unknown
    isError: boolean
}) => {

    if (isLoading) {
        return <div className="pt-0">
            <PlayerRatingSkeleton />
        </div>
    }

    if (isError) {
        const message =
            error instanceof Error ? error.message : "Something went wrong!";
        return <div className="py-8">
            <ErrorContainer message={message} />
        </div>
    }

    const ratingData = data?.rating?.slice(0, 5);
    const gameCount = Math.min(data?.rating?.length ?? 0, 5);


    if (!ratingData) return null;
  return (
    <div className="bg-white shadow-[0px_4px_16px_0px_#00000014] rounded-[16px] p-5">
      <h4 className="text-xl md:text-3xl lg:text-4xl font-normal leading-[120%] text-[#131313] pb-2">
        PLAYER RATINGS FROM LAST {gameCount} GAME{gameCount > 1 ? "S" : ""}
      </h4>

      <Card>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-[290px]">
            <BarChart data={ratingData} margin={{ top: 32 }}>
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="createdAt"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value: string) => value.slice(0, 10)}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />

              <Bar
                dataKey="rating"
                fill="var(--color-desktop)"
                radius={8}
              >
                <LabelList content={CustomBarLabel} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default PlayerRating



