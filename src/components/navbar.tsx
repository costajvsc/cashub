"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserDropdownMenu } from "./user-dropdown";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <nav className="px-6 py-2 flex justify-between">
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
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Opções</SheetTitle>
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
                        </SheetHeader>

                        <SheetFooter>
                            <SheetClose asChild>
                                <Button>Fecahar</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </nav>
        );
    }

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
