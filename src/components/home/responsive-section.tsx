import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function ResponsiveSection() {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image
                            src="/cashub-hero-image.png"
                            className="md:max-w-lg sm:rounded-lg"
                            alt="Cashub hero image"
                            height={500}
                            width={500}
                        />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-green-600 font-semibold">
                            Layout responsivo
                        </h3>
                        <p className="text-muted-foreground text-3xl font-semibold sm:text-4xl">
                            Experiência pensada para dispositivos móveis
                        </p>
                        <p className="mt-3 text-muted-foreground">
                            O app foi pensado desde o início para funcionar
                            perfeitamente em dispositivos móveis. Com um layout
                            responsivo e adaptável, você pode controlar suas
                            finanças de forma prática, onde estiver.
                        </p>
                        <Link
                            href="/login"
                            className="inline-flex gap-x-1 items-center text-green-600 hover:text-green-500 duration-150 font-medium"
                        >
                            Comece agora
                            <LogIn />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
