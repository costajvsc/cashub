import { GetTransactions } from "@/actions/transactions/get-transactions";
import { Navbar } from "@/components/navbar";
import { ListTransactions } from "@/components/transactions/list-transactions";
import { TransactionsCards } from "@/components/transactions/transactions-cards";

export default async function TransactionsPage() {
    const transactions = await GetTransactions();
    return (
        <>
            <Navbar />
            <div className="space-y-6 p-6">
                <TransactionsCards />
                <ListTransactions data={transactions} />
            </div>
        </>
    );
}
