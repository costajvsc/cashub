import { GetTransactions } from "@/actions/transactions/get-transactions";
import { Navbar } from "@/components/navbar";
import { ListTransactions } from "@/components/transactions/list-transactions";
import { TransactionCard } from "@/components/transactions/transaction-card";
import { TransactionsCards } from "@/components/transactions/transactions-cards";
import { getCurrentUser } from "@/lib/auth";
import { endOfMonth, format, isMatch, startOfMonth } from "date-fns";
import { redirect } from "next/navigation";

export default async function TransactionsPage({
    searchParams,
}: {
    searchParams: Promise<{ from: string; to: string; month: string }>;
}) {
    const user = await getCurrentUser();
    const { month, from, to } = await searchParams;

    if (!user) redirect("/login");
    if (!month && !from && !to) redirect(`?month=${new Date().getMonth() + 1}`);

    const query = { from, to };

    if (month && isMatch(month, "MM")) {
        const defaultDate = new Date(
            new Date().getFullYear(),
            Number(month) - 1
        );
        query.from = format(startOfMonth(defaultDate), "yyyy-MM-dd");
        query.to = format(endOfMonth(defaultDate), "yyyy-MM-dd");
    }

    const transactions = await GetTransactions({ searchParams: query });

    return (
        <>
            <Navbar />

            <div className="space-y-6 p-6">
                <TransactionsCards from={query.from} to={query.to} />
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
