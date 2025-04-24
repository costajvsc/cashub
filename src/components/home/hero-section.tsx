import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl text-primary font-medium">
                        Cashub
                    </h1>
                    <h2 className="text-2xl text-muted-foreground font-extrabold mx-auto md:text-5xl">
                        Organize suas despesas e receitas de forma simples e{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-#00f846]">
                            assuma o controle da sua vida financeira
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                        Entenda seus gastos e receitas com gráficos e relatórios
                        analisados por IA.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a
                            href="/login"
                            className="block py-2 px-4 text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg shadow-lg hover:shadow-none"
                        >
                            Criar conta
                        </a>
                        <Link
                            href="https://github.com/costajvsc/cashub"
                            className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
                        >
                            Github
                        </Link>
                    </div>
                </div>
                <div className="mt-14">
                    <Image
                        src="/cashub-hero-image.png"
                        className="w-full shadow-lg rounded-lg border"
                        alt="Cashub Dashboard Screenshot"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </section>
    );
}
