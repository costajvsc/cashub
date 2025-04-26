"use client";
import { useState } from "react";

import { MoreHorizontal, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Transaction } from "@prisma/client";
import { TransactionSheet } from "./transaction-sheet";
import { TransactionAlertDelete } from "./transaction-alert-delete";

interface TransactionActionsColumnProps {
    transaction: Transaction;
}

export function TransactionActionsColumn({
    transaction,
}: TransactionActionsColumnProps) {
    const [openForm, setOpenForm] = useState(false);
    const [openAlertDelete, setOpenAlertDelete] = useState(false);

    return (
        <>
            {openForm && (
                <TransactionSheet
                    open={openForm}
                    setOpen={setOpenForm}
                    transaction={transaction}
                />
            )}
            {openAlertDelete && (
                <TransactionAlertDelete
                    open={openAlertDelete}
                    setOpen={setOpenAlertDelete}
                    transaction={transaction}
                />
            )}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0 ">
                        <span className="sr-only">Abrir menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() =>
                            navigator.clipboard.writeText(transaction.id)
                        }
                    >
                        Copiar ID transação
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setOpenForm(true)}>
                        <Edit className="mr-2" /> Editar transação
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpenAlertDelete(true)}>
                        <Trash className="mr-2" /> Excluir transação
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
