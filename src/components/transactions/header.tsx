import AddTransactionButton from "./add-transaction-button";
import { TransactionDatePicker } from "./transaction-date-picker";

export function Header() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between md:items-center space-y-8 md:space-y-0">
                <h1 className="text-2xl">Transações</h1>
                <div className="flex flex-col md:flex-row md:items-center justify-end gap-2">
                    <TransactionDatePicker />
                    <AddTransactionButton />
                </div>
            </div>
        </>
    );
}
