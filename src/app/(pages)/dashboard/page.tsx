import { redirect } from "next/navigation";
import { isMatch } from "date-fns";

import { TimeSelect } from "@/components/dashboard/time-select";
import { SummaryCards } from "@/components/dashboard/summary-cards";
import { LastTransactions } from "@/components/dashboard/last-transactions";
import { ExpensesPerCategory } from "@/components/dashboard/expenses-per-category";
import TransactionsPieChart from "@/components/dashboard/transactions-pie-chart";
import { getDashboard } from "@/actions/dashboard";
import { Navbar } from "@/components/navbar";
import { TransactionDatePicker } from "@/components/transactions/transaction-date-picker";
import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const user = await getCurrentUser();
    if (!user) redirect("/login");

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
                    <div className="flex items-center gap-2">
                        <TransactionDatePicker />
                        <TimeSelect />
                    </div>
                </div>
                <div className="grid h-ful grid-cols-3 gap-6 overflow-hidden flex-1">
                    <div className="flex flex-col gap-6 overflow-hidden col-span-2">
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
