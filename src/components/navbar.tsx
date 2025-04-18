"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDropdownMenu } from "./user-dropdown";

export function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-between border-b border-solid px-8 py-4">
            <Link href="/">
                <div className="relative w-[103px] h-[39px]">
                    <Image
                        src="/logo.svg"
                        alt="Finance AI"
                        fill
                        className="block dark:hidden"
                    />
                    <Image
                        src="/logo-dark.svg"
                        alt="Finance AI"
                        fill
                        className="hidden dark:block"
                    />
                </div>
            </Link>
            <div className="flex gap-10 items-center">
                <Link
                    href="/dashboard"
                    className={
                        pathname === "/dashboard"
                            ? "font-bold text-primary"
                            : "text-muted-foreground"
                    }
                >
                    Dashboard
                </Link>
                <Link
                    href="/transactions"
                    className={
                        pathname === "/transactions"
                            ? "font-bold text-primary"
                            : "text-muted-foreground"
                    }
                >
                    Transações
                </Link>
                <Link
                    href="/subscription"
                    className={
                        pathname === "/subscription"
                            ? "font-bold text-primary"
                            : "text-muted-foreground"
                    }
                >
                    Assinatura
                </Link>
                <UserDropdownMenu />
            </div>
        </nav>
    );
}
