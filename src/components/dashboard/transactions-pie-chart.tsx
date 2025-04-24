"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

import { TransactionType } from "@prisma/client";

import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { TransactionPercentagePerType } from "@/actions/dashboard/types";
import PercentageItem from "./percentage-item";

const chartConfig = {
    [TransactionType.INVESTMENT]: {
        label: "Investido",
        color: "#51a2ff",
    },
    [TransactionType.DEPOSIT]: {
        label: "Receita",
        color: "#55B02E",
    },
    [TransactionType.EXPENSE]: {
        label: "Despesas",
        color: "#E93030",
    },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
    typesPercentage: TransactionPercentagePerType;
    depositsTotal: number;
    investmentsTotal: number;
    expensesTotal: number;
}

export default function TransactionsPieChart({
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    typesPercentage,
}: TransactionsPieChartProps) {
    const chartData = [
        {
            type: TransactionType.DEPOSIT,
            amount: depositsTotal,
            fill: "#55B02E",
        },
        {
            type: TransactionType.EXPENSE,
            amount: expensesTotal,
            fill: "#E93030",
        },
        {
            type: TransactionType.INVESTMENT,
            amount: investmentsTotal,
            fill: "#51a2ff",
        },
    ];
    return (
        <Card className="flex flex-col p-6 w-full">
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="amount"
                            nameKey="type"
                            innerRadius={60}
                        />
                    </PieChart>
                </ChartContainer>

                <div className="space-y-3">
                    <PercentageItem
                        icon={
                            <TrendingUpIcon
                                size={16}
                                className="text-primary"
                            />
                        }
                        title="Receita"
                        value={typesPercentage[TransactionType.DEPOSIT]}
                    />
                    <PercentageItem
                        icon={
                            <TrendingDownIcon
                                size={16}
                                className="text-red-500"
                            />
                        }
                        title="Despesas"
                        value={typesPercentage[TransactionType.EXPENSE]}
                    />
                    <PercentageItem
                        icon={
                            <PiggyBankIcon
                                size={16}
                                className="text-blue-500"
                            />
                        }
                        title="Investido"
                        value={typesPercentage[TransactionType.INVESTMENT]}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
