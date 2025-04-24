import { db } from "@/lib/prisma";
import { TransactionType } from "@prisma/client";
import { TotalExpensePerCategory, TransactionPercentagePerType } from "./types";
import { getCurrentUser } from "@/lib/auth";

interface GetDashboardParams {
    from: string;
    to: string;
}

export const getDashboard = async ({ from, to }: GetDashboardParams) => {
    const user = await getCurrentUser();

    if (!user) throw new Error("Usuário não autenticado");
    const userId = user.id;

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
        userId: userId,
    };
    console.log(from, to);
    const depositsTotal = Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "DEPOSIT" },
                _sum: { amount: true },
            })
        )?._sum?.amount
    );

    const investmentsTotal = Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "INVESTMENT" },
                _sum: { amount: true },
            })
        )?._sum?.amount
    );

    const expensesTotal = Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "EXPENSE" },
                _sum: { amount: true },
            })
        )?._sum?.amount
    );

    const balance = depositsTotal - investmentsTotal - expensesTotal;

    const transactionsTotal = Number(
        (
            await db.transaction.aggregate({
                where,
                _sum: { amount: true },
            })
        )._sum.amount
    );

    const typesPercentage: TransactionPercentagePerType = {
        [TransactionType.DEPOSIT]: Math.round(
            (Number(depositsTotal || 0) / Number(transactionsTotal)) * 100
        ),
        [TransactionType.EXPENSE]: Math.round(
            (Number(expensesTotal || 0) / Number(transactionsTotal)) * 100
        ),
        [TransactionType.INVESTMENT]: Math.round(
            (Number(investmentsTotal || 0) / Number(transactionsTotal)) * 100
        ),
    };

    const totalExpensePerCategory: TotalExpensePerCategory[] = (
        await db.transaction.groupBy({
            by: ["category"],
            where: {
                ...where,
                type: TransactionType.EXPENSE,
            },
            _sum: {
                amount: true,
            },
        })
    ).map((category) => ({
        category: category.category,
        totalAmount: Number(category._sum.amount),
        percentageOfTotal: Math.round(
            (Number(category._sum.amount) / Number(expensesTotal)) * 100
        ),
    }));

    const lastTransactions = await db.transaction.findMany({
        where,
        orderBy: { date: "desc" },
        take: 10,
    });

    return {
        balance,
        depositsTotal,
        investmentsTotal,
        expensesTotal,
        typesPercentage,
        totalExpensePerCategory,
        lastTransactions,
    };
};
