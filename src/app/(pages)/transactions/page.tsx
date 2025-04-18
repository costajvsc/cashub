import { GetTransactions } from "@/actions/transactions/get-transactions";
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/transactions/header";
import { ListTransactions } from "@/components/transactions/list-transactions";

export default async function TransactionsPage() {
    const transactions = await GetTransactions();
    return (
        <>
            <Navbar />
            <div className="space-y-6 p-6">
                <Header />
                <ListTransactions data={transactions} />
            </div>
        </>
    );
}
