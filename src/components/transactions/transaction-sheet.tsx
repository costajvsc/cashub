"use client";
import { Transaction } from "@prisma/client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { FormTransaction } from "./form-transaction";

interface TransactionProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    transaction?: Transaction;
}
export function TransactionSheet({
    transaction,
    open,
    setOpen,
}: TransactionProps) {
    return (
        <Sheet open={open} onOpenChange={() => setOpen(!open)}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        {!transaction
                            ? `Adicionar transação`
                            : `Editar transação ${transaction.name}`}
                    </SheetTitle>
                    <SheetDescription>
                        <FormTransaction
                            defaultValues={
                                transaction && {
                                    ...transaction,
                                    amount: Number(transaction.amount),
                                }
                            }
                            transactionId={transaction && transaction.id}
                            open={open}
                            setOpen={setOpen}
                        />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
