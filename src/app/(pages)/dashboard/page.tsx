import { redirect } from "next/navigation";
import { isMatch } from "date-fns";

import { TimeSelect } from "@/components/dashboard/time-select";
import { SummaryCards } from "@/components/dashboard/summary-cards";
import { LastTransactions } from "@/components/dashboard/last-transactions";
import { ExpensesPerCategory } from "@/components/dashboard/expenses-per-category";
import TransactionsPieChart from "@/components/dashboard/transactions-pie-chart";
import { getDashboard } from "@/actions/dashboard";
import { Navbar } from "@/components/navbar";

export default async function DashboardPage(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const searchParams = await props.searchParams;
    const month = searchParams.month;

    const monthIsInvalid =
        !month || typeof month !== "string" || !isMatch(month, "MM");

    if (monthIsInvalid) redirect(`?month=${new Date().getMonth() + 1}`);

    const dashboard = JSON.parse(JSON.stringify(await getDashboard(month)));

    return (
        <>
            <Navbar />
            <div className="flex h-full flex-col space-y-6 overflow-hidden p-6">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <TimeSelect />
                </div>
                <div className="grid h-ful grid-cols-[2fr,1fr] gap-6 overflow-hidden">
                    <div className="flex flex-col gap-6 overflow-hidden">
                        <SummaryCards month={month} {...dashboard} />
                        <div className="grid h-full grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
                            <TransactionsPieChart {...dashboard} />
                            <ExpensesPerCategory
                                expensesPerCategory={
                                    dashboard.totalExpensePerCategory
                                }
                            />
                        </div>
                    </div>
                    <LastTransactions
                        lastTransactions={dashboard.lastTransactions}
                    />
                </div>
            </div>
        </>
    );
}
