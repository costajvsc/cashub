"use client";
import { LogInIcon, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export function LogInButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="flex flex-col gap-4">
                <p>Olá, {session.user?.name}</p>
                <div>
                    <Button
                        variant="outline"
                        className="text-danger"
                        onClick={() => signOut()}
                    >
                        <LogOut size={16} className="mr-1" />
                        Sair
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <Button variant="outline" onClick={() => signIn("google")}>
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
        </Button>
    );
}
