"use server";

import { db } from "@/lib/prisma";
import {
    TransactionCategory,
    TransactionPaymentMethod,
    TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

interface UpdateTransactionParams {
    id: string;
    name: string;
    amount: number;
    type: TransactionType;
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    date: Date;
}

export async function UpdateTransaction(params: UpdateTransactionParams) {
    await db.transaction.update({
        data: {
            ...params,
        },
        where: {
            id: params.id,
        },
    });

    revalidatePath("/transactions");
    revalidatePath("/dashboard");
}
