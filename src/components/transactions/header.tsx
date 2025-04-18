"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TransactionSheet } from "./transaction-sheet";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Transações</h1>
                <Button onClick={() => setOpen(true)}>
                    Adicionar transação
                </Button>
            </div>
            <TransactionSheet open={open} setOpen={setOpen} />
        </>
    );
}
