import { redirect } from "next/navigation";
import { endOfMonth, format, isMatch, startOfMonth } from "date-fns";

import { TimeSelect } from "@/components/dashboard/time-select";
import { SummaryCards } from "@/components/dashboard/summary-cards";
import { LastTransactions } from "@/components/dashboard/last-transactions";
import { ExpensesPerCategory } from "@/components/dashboard/expenses-per-category";
import TransactionsPieChart from "@/components/dashboard/transactions-pie-chart";
import { getDashboard } from "@/actions/dashboard";
import { Navbar } from "@/components/navbar";
import { TransactionDatePicker } from "@/components/transactions/transaction-date-picker";
import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage({
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

    const dashboard = JSON.parse(
        JSON.stringify(await getDashboard({ from: query.from, to: query.to }))
    );

    return (
        <>
            <Navbar />
            <div className="flex h-full flex-col space-y-6 p-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                        <TransactionDatePicker />
                        <TimeSelect />
                    </div>
                </div>
                <div className="grid h-ful grid-cols-1 md:grid-cols-3 gap-6  flex-1">
                    <div className="flex flex-col gap-6 overflow-hidden col-span-2">
                        <SummaryCards month={month} {...dashboard} />
                        <div className="grid h-full grid-cols-1 md:grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
                            <TransactionsPieChart {...dashboard} />
                            <ExpensesPerCategory
                                expensesPerCategory={
                                    dashboard.totalExpensePerCategory
                                }
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex">
                        <LastTransactions
                            lastTransactions={dashboard.lastTransactions}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
