import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/prisma";

interface GetTransactionsParams {
    searchParams: {
        from: string;
        to: string;
    };
}

export async function GetTransactions({
    searchParams: { from, to },
}: GetTransactionsParams) {
    const user = await getCurrentUser();
    if (!user) throw new Error("Usuário não autenticado");

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
    };

    const transactions = await db.transaction.findMany({
        where: {
            userId: user.id,
            ...where,
        },
    });

    return JSON.parse(JSON.stringify(transactions));
}

export async function GetDepositsTotal({
    searchParams: { from, to },
}: GetTransactionsParams) {
    const user = await getCurrentUser();
    if (!user) throw new Error("Usuário não autenticado");

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
        userId: user.id,
    };

    return Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "DEPOSIT" },
                _sum: { amount: true },
            })
        )?._sum?.amount
    );
}

export async function GetInvestmentsTotal({
    searchParams: { from, to },
}: GetTransactionsParams) {
    const user = await getCurrentUser();
    if (!user) throw new Error("Usuário não autenticado");

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
        userId: user.id,
    };

    return Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "INVESTMENT" },
                _sum: { amount: true },
            })
        )?._sum?.amount
    );
}

export async function GetExpensesTotal({
    searchParams: { from, to },
}: GetTransactionsParams) {
    const user = await getCurrentUser();
    if (!user) throw new Error("Usuário não autenticado");

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
        userId: user.id,
    };

    return Number(
        (
            await db.transaction.aggregate({
                where: { ...where, type: "EXPENSE" },
                _sum: { amount: true },
            })
        )?._sum?.amount
    );
}

export async function GetCreditCardTotal({
    searchParams: { from, to },
}: GetTransactionsParams) {
    const user = await getCurrentUser();
    if (!user) throw new Error("Usuário não autenticado");

    const where = {
        date: {
            gte: new Date(`${from}T03:00:00.000Z`),
            lte: new Date(`${to}T03:00:00.000Z`),
        },
    };

    return Number(
        (
            await db.transaction.aggregate({
                where: {
                    ...where,
                    paymentMethod: "CREDIT_CARD",
                    userId: user.id,
                },
                _sum: { amount: true },
            })
        )?._sum?.amount
    );
}
