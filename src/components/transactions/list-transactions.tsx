"use client";

import { Transaction } from "@prisma/client";
import { transactionColumns } from "./columns";
import { DataTable } from "../data-table";

interface ListTransactionsProps {
    data: Transaction[];
}
export function ListTransactions({ data }: ListTransactionsProps) {
    return data ? <DataTable columns={transactionColumns} data={data} /> : "";
}
