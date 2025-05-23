import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import { FormatMonetaryValue } from "@/lib/currency";
import { Transaction, TransactionType } from "@prisma/client";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/schemas/transaction-schema";

interface LastTransactionsProps {
    lastTransactions: Transaction[];
}

export function LastTransactions({ lastTransactions }: LastTransactionsProps) {
    const getAmountColor = (transaction: Transaction) => {
        if (transaction.type === TransactionType.EXPENSE) {
            return "text-red-500";
        }
        if (transaction.type === TransactionType.DEPOSIT) {
            return "text-primary";
        }
        return "text-blue-500";
    };
    const getAmountPrefix = (transaction: Transaction) => {
        if (transaction.type === TransactionType.DEPOSIT) {
            return "+";
        }
        return "-";
    };
    return (
        <Card className="rounded-md border flex-1">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-bold">Últimas Transações</CardTitle>
                <Button
                    variant="outline"
                    className="rounded-full font-bold"
                    asChild
                >
                    <Link href="/transactions">Ver mais</Link>
                </Button>
            </CardHeader>
            <ScrollArea>
                <CardContent className="space-y-6">
                    {lastTransactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-muted p-3 text-muted-foreground">
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
                                <div>
                                    <p className="text-sm font-bold">
                                        {transaction.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(
                                            transaction.date
                                        ).toLocaleDateString("pt-BR", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                            <p
                                className={`text-sm font-bold ${getAmountColor(
                                    transaction
                                )}`}
                            >
                                {getAmountPrefix(transaction)}
                                {FormatMonetaryValue(
                                    Number(transaction.amount)
                                )}
                            </p>
                        </div>
                    ))}
                </CardContent>
            </ScrollArea>
        </Card>
    );
}
