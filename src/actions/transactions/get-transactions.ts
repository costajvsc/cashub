import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/prisma";

export async function GetTransactions() {
    const user = await getCurrentUser();

    if (!user) throw new Error("Usuário não autenticado");

    const transactions = await db.transaction.findMany({
        where: {
            userId: user.id,
        },
    });

    return JSON.parse(JSON.stringify(transactions));
}
