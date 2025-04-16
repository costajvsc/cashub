import { GetTransactions } from "@/actions/transactions/get-transactions";
import { Header } from "@/components/transactions/header";
import { ListTransactions } from "@/components/transactions/list-transactions";

export default async function TransactionsPage() {
    const transactions = await GetTransactions();
    return (
        <>
            <Header />
            <ListTransactions data={transactions} />
        </>
    );
}
