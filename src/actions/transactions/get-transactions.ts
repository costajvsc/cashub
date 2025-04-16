import { db } from "@/lib/prisma";

export async function GetTransactions() {
    const transactions = await db.transaction.findMany();

    return JSON.parse(JSON.stringify(transactions));
}
