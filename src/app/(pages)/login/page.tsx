import Image from "next/image";
import { LogInButton } from "@/components/login-button";

export default function LoginPage() {
    return (
        <div className="grid h-full grid-cols-2">
            <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
                <Image
                    src="/logo.svg"
                    alt="Finance AI"
                    width={173}
                    height={39}
                    className="block dark:hidden"
                />
                <Image
                    src="/logo-dark.svg"
                    alt="Finance AI"
                    width={173}
                    height={39}
                    className="hidden dark:block"
                />
                <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
                <p className="mb-8 text-muted-foreground">
                    O Cashub é uma plataforma de gestão financeira que utiliza
                    IA para monitorar suas movimentações, e oferecer insights
                    personalizados, facilitando o controle do seu orçamento.
                </p>
                <LogInButton />
            </div>
            <div className="relative h-full w-full">
                <Image
                    src="/login.png"
                    alt="Faça login"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}
