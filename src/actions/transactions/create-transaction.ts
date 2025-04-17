"use server";

import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/prisma";
import {
    TransactionCategory,
    TransactionPaymentMethod,
    TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

interface CreateTransactionParams {
    name: string;
    amount: number;
    type: TransactionType;
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    date: Date;
}

export async function CreateTransaction(params: CreateTransactionParams) {
    const user = await getCurrentUser();

    if (!user) throw new Error("Usuário não autenticado");

    await db.transaction.create({
        data: {
            ...params,
            userId: user.id,
        },
    });

    revalidatePath("/transactions");
}
