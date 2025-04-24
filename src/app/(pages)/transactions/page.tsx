import { GetTransactions } from "@/actions/transactions/get-transactions";
import { Navbar } from "@/components/navbar";
import { ListTransactions } from "@/components/transactions/list-transactions";
import { TransactionCard } from "@/components/transactions/transaction-card";
import { TransactionsCards } from "@/components/transactions/transactions-cards";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function TransactionsPage() {
    const user = await getCurrentUser();
    if (!user) redirect("/login");

    const transactions = await GetTransactions();
    return (
        <>
            <Navbar />

            <div className="space-y-6 p-6">
                <TransactionsCards />
                <div className="block lg:hidden">
                    <TransactionCard transactions={transactions} />
                </div>
                <div className="hidden lg:block">
                    <ListTransactions data={transactions} />
                </div>
            </div>
        </>
    );
}
