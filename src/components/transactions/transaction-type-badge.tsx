import { Badge } from "@/components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
interface TransactionTypeBadgeProps {
    transaction: Transaction;
}
const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        return (
            <Badge className="bg-muted font-bold text-primary hover:bg-muted">
                <CircleIcon className="fill-primary" size={10} />
                Depósito
            </Badge>
        );
    }
    if (transaction.type === TransactionType.EXPENSE) {
        return (
            <Badge className="font bold bg-muted text-red-500">
                <CircleIcon className="fill-red-500" size={10} />
                Despesa
            </Badge>
        );
    }
    return (
        <Badge className="font bold bg-muted text-blue-500">
            <CircleIcon className="fill-blue-500" size={10} />
            Investimento
        </Badge>
    );
};
export default TransactionTypeBadge;
