"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TransactionSheet } from "./transaction-sheet";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center pb-8">
                <h1>Planos de serviço</h1>
                <Button onClick={() => setOpen(true)}>
                    Adicionar transação
                </Button>
            </div>
            <TransactionSheet open={open} setOpen={setOpen} />
        </>
    );
}
