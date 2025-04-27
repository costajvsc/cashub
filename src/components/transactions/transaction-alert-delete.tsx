import { PanelTopClose, Trash } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { DeleteTransaction } from "@/actions/transactions/delete-transaction";
import { Transaction } from "@prisma/client";
import { HandleToast } from "@/lib/toast";
import { Button } from "../ui/button";

interface TransactionAlertDeleteProps {
    transaction: Transaction;
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function TransactionAlertDelete({
    transaction,
    open = false,
    setOpen,
}: TransactionAlertDeleteProps) {
    async function handleDelete() {
        await DeleteTransaction(transaction.id);
        setOpen(!open);
        HandleToast({
            status: "warning",
            title: "Transação excluída.",
            description: `Transação ${transaction.name} foi excluída com sucesso.`,
        });
    }

    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Tem certeza que deseja prossegir com a operação?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Está ação não poderá ser reversível, todos os dados
                        relacionados a este profissional serão excluidos.
                        <br />
                        {transaction.name}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setOpen(!open)}>
                        <PanelTopClose size={16} className="mr-2" /> Fechar
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button
                            variant="destructive"
                            className="text-white"
                            onClick={handleDelete}
                        >
                            <Trash size={16} className="mr-2" /> Excluir
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
