"use client";
import {
    TRANSACTION_CATEGORY_LABELS,
    TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/schemas/transaction-schema";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { TransactionActionsColumn } from "./transaction-actions-column";
import TransactionTypeBadge from "./transaction-type-badge";

export const transactionColumns: ColumnDef<Transaction>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row: { original: transaction } }) => (
            <TransactionTypeBadge transaction={transaction} />
        ),
    },
    {
        accessorKey: "category",
        header: "Categoria",
        cell: ({ row: { original: transaction } }) =>
            TRANSACTION_CATEGORY_LABELS[transaction.category],
    },
    {
        accessorKey: "paymentMethod",
        header: "Método de Pagamento",
        cell: ({ row: { original: transaction } }) =>
            TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
    },
    {
        accessorKey: "date",
        header: "Data",
        cell: ({ row: { original: transaction } }) =>
            new Date(transaction.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }),
    },
    {
        accessorKey: "amount",
        header: "Valor",
        cell: ({ row: { original: transaction } }) =>
            new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(Number(transaction.amount)),
    },
    {
        accessorKey: "actions",
        header: "Ações",
        cell: ({ row: { original: transaction } }) => {
            return (
                <div className="space-x-1">
                    <TransactionActionsColumn transaction={transaction} />
                </div>
            );
        },
    },
];
