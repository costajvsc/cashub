"use server";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function DeleteTransaction(id: string) {
    await db.transaction.delete({ where: { id } });
    revalidatePath("/transactions");
}
