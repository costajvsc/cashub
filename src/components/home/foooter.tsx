import { Github, Linkedin, MousePointer2, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    const footerNavs = [
        {
            href: "#",
            name: "Sobre o projeto",
        },
        {
            href: "#",
            name: "Background Software",
        },
        {
            href: "#",
            name: "Contato",
        },
        {
            href: "#",
            name: "Suporte",
        },
    ];

    return (
        <footer className="text-muted-foreground px-4 py-5 md:px-8">
            <div className="sm:mx-auto sm:text-center">
                <Image
                    src="/logo.svg"
                    className="w-32 sm:mx-auto"
                    height={96}
                    width={96}
                    alt="Logo Cashub"
                />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Nosso app te ajuda a registrar, acompanhar e entender seus
                    gastos de forma prática e visual. Com recursos pensados para
                    o dia a dia, você tem controle total sobre suas finanças,
                    direto do seu celular — de forma segura, gratuita e com
                    código aberto.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {footerNavs.map((item) => (
                    <li className=" hover:text-gray-800" key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">&copy; 2025 Cashub.</div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="#">
                                <Twitter />
                            </Link>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="#">
                                <Github />
                            </Link>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="/">
                                <Linkedin />
                            </Link>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Link href="/">
                                <MousePointer2 />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
