import {
    PiggyBankIcon,
    TrendingDownIcon,
    TrendingUpIcon,
    WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./summary-card";

interface SummaryCards {
    month: string;
    balance: number;
    depositsTotal: number;
    investmentsTotal: number;
    expensesTotal: number;
}

export async function SummaryCards({
    balance,
    depositsTotal,
    expensesTotal,
    investmentsTotal,
}: SummaryCards) {
    return (
        <div className="space-y-6">
            <SummaryCard
                icon={<WalletIcon size={16} />}
                title="Saldo"
                amount={balance}
                size="large"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SummaryCard
                    icon={<PiggyBankIcon size={16} />}
                    title="Investido"
                    amount={investmentsTotal}
                />
                <SummaryCard
                    icon={<TrendingUpIcon size={16} className="text-primary" />}
                    title="Receita"
                    amount={depositsTotal}
                />
                <SummaryCard
                    icon={
                        <TrendingDownIcon size={16} className="text-red-500" />
                    }
                    title="Despesas"
                    amount={expensesTotal}
                />
            </div>
        </div>
    );
}
