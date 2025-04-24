import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import TransactionTypeBadge from "./transaction-type-badge";
import { Badge } from "../ui/badge";
import {
    TRANSACTION_CATEGORY_LABELS,
    TRANSACTION_PAYMENT_METHOD_ICONS,
} from "@/schemas/transaction-schema";
import { Transaction } from "@prisma/client";

import { FormatMonetaryValue } from "@/lib/currency";
import { TransactionActionsColumn } from "./transaction-actions-column";

interface TransactionCardProps {
    transactions: Transaction[];
}

export function TransactionCard({ transactions }: TransactionCardProps) {
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <div className="space-y-4">
            {transactions.map((transaction) => (
                <Card key={transaction.id} className="gap-2">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base">
                                {transaction.name}
                            </CardTitle>
                            <TransactionActionsColumn
                                transaction={transaction}
                            />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-1">
                            <div className="w-full flex items-center justify-between">
                                <div className="flex gap-2">
                                    <TransactionTypeBadge
                                        transaction={transaction}
                                    />
                                    <Badge variant="outline">
                                        {
                                            TRANSACTION_CATEGORY_LABELS[
                                                transaction.category
                                            ]
                                        }
                                    </Badge>
                                </div>

                                <Image
                                    src={`/icons/${
                                        TRANSACTION_PAYMENT_METHOD_ICONS[
                                            transaction.paymentMethod
                                        ]
                                    }`}
                                    height={20}
                                    width={20}
                                    alt="PIX"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    {formatDate(transaction.date)}
                                </span>

                                <span className="text-base">
                                    {FormatMonetaryValue(
                                        Number(transaction.amount)
                                    )}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
