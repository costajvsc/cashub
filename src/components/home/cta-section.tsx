import Link from "next/link";
import Image from "next/image";

export function CtaSection() {
    return (
        <section className="relative max-w-screen-xl mx-auto py-4 lg:py-16 px-4 md:px-8 space-y-16">
            <div className="w-full text-center space-y-2">
                <h2 className="text-4xl">
                    Ajudamos a controlar sua vida finaceira
                </h2>
                <p>
                    Esteja em dias com suas contas e entenda como cortar gastos
                    e poupar um dinheiro no final do mês. Faça com que sua conta
                    esteja sempre{" "}
                    <span className="text-green-400">positiva</span>.
                </p>
            </div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-muted-foreground font-semibold md:text-4xl">
                        Analise suas transações de forma{" "}
                        <span className="text-green-600">organizada.</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                        Organize sua vida financeira e entenda como o seu
                        dinheiro está sendo gasto agrupando as transações por
                        categoria e definindo o meio de pagamento.
                    </p>
                    <Link
                        className="mt-5 px-4 py-2 text-green-600 font-medium bg-green-200 rounded-full inline-flex items-center"
                        href="/login"
                    >
                        Começe agora
                    </Link>
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <Image
                        src="/cashub-hero-image.png"
                        alt="Cashub Dashboard Screenshot"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </section>
    );
}
