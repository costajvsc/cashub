import {
    CreditCard,
    PiggyBankIcon,
    TrendingDownIcon,
    TrendingUpIcon,
} from "lucide-react";
import { TransactionSummaryCard } from "./transaction-summary-card";
import {
    GetCreditCardTotal,
    GetDepositsTotal,
    GetExpensesTotal,
    GetInvestmentsTotal,
} from "@/actions/transactions/get-transactions";
import { Header } from "./header";

export async function TransactionsCards() {
    const searchParams = {
        from: "2025-04-01",
        to: "2025-04-30",
    };

    const totalExpensives = await GetExpensesTotal({ searchParams });
    const totalDeposits = await GetDepositsTotal({ searchParams });
    const totalInvestments = await GetInvestmentsTotal({ searchParams });
    const totalCreditCard = await GetCreditCardTotal({ searchParams });
    return (
        <>
            <div className="grid grid-cols-4 gap-6">
                <TransactionSummaryCard
                    icon={<PiggyBankIcon size={16} className="text-primary" />}
                    title="Saldo"
                    amount={
                        totalDeposits - (totalExpensives + totalInvestments)
                    }
                />
                <TransactionSummaryCard
                    icon={<TrendingUpIcon size={16} className="text-primary" />}
                    title="Receita"
                    amount={totalDeposits}
                />
                <TransactionSummaryCard
                    icon={
                        <TrendingDownIcon size={16} className="text-red-500" />
                    }
                    title="Despesas"
                    amount={totalExpensives}
                />
                <TransactionSummaryCard
                    icon={<CreditCard size={16} className="text-yellow-500" />}
                    title="Cartões"
                    amount={totalCreditCard}
                />
            </div>
            <Header />
        </>
    );
}
