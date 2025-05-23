import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";
import AddTransactionButton from "../transactions/add-transaction-button";

interface SummaryCardProps {
    icon: ReactNode;
    title: string;
    amount: number;
    size?: "small" | "large";
}

export function SummaryCard({
    icon,
    title,
    amount,
    size = "small",
}: SummaryCardProps) {
    return (
        <Card>
            <CardHeader className="flex-row items-center gap-4">
                {icon}
                <p
                    className={`${
                        size === "small"
                            ? "text-muted-foreground"
                            : "text-white opacity-70"
                    }`}
                >
                    {title}
                </p>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                <p
                    className={`font-bold ${
                        size === "small" ? "text-2xl" : "text-4xl"
                    }`}
                >
                    {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(amount)}
                </p>

                {size === "large" && <AddTransactionButton />}
            </CardContent>
        </Card>
    );
}
