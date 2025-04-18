import AddTransactionButton from "./add-transaction-button";
import { TransactionDatePicker } from "./transaction-date-picker";

export function Header() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Transações</h1>
                <div className="flex items-center gap-2">
                    <TransactionDatePicker />
                    <AddTransactionButton />
                </div>
            </div>
        </>
    );
}
