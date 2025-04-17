"use client";
import { useState } from "react";

import { Button } from "../ui/button";
import { TransactionSheet } from "./transaction-sheet";

export default function AddTransactionButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Adicionar transação</Button>
            <TransactionSheet open={open} setOpen={setOpen} />
        </>
    );
}
