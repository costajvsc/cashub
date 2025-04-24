import {
    ChartNoAxesCombined,
    Filter,
    Github,
    KeySquare,
    List,
    Lock,
} from "lucide-react";

export function FeaturesSection() {
    const features = [
        {
            icon: <List />,
            title: "Categorias",
            desc: "Separe suas movimentações por categorias personalizáveis como Alimentação, Lazer, Contas Fixas, etc. Isso facilita o acompanhamento de gastos e a identificação de padrões no seu consumo.",
        },
        {
            icon: <ChartNoAxesCombined />,
            title: "Dashboard analítico",
            desc: "Tenha uma visão geral das suas transações, entradas e saídas em gráficos simples e intuitivos. O dashboard ajuda você a entender sua saúde financeira de forma rápida e eficiente.",
        },
        {
            icon: <Lock />,
            title: "Segurança",
            desc: "O código do projeto está aberto para que qualquer pessoa possa verificar, colaborar ou até mesmo adaptar. E o melhor: é 100% gratuito para uso pessoal.",
        },
        {
            icon: <Github />,
            title: "OpenSource",
            desc: "O código do projeto está aberto para que qualquer pessoa possa verificar, colaborar ou até mesmo adaptar. E o melhor: é 100% gratuito para uso pessoal.",
        },
        {
            icon: <Filter />,
            title: "Filtros avançados",
            desc: "Use filtros por mês ou datas personalizadas para visualizar exatamente o que você precisa. Economize tempo ao analisar seus registros financeiros de forma flexível.",
        },
        {
            icon: <KeySquare />,
            title: "Simples de acessar",
            desc: "Entre com sua conta Google de forma segura e rápida, sem precisar criar novas senhas. A experiência de uso é pensada para ser simples desde o primeiro acesso.",
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-muted-foreground md:px-8">
                <div className="relative max-w-2xl mx-auto sm:text-center">
                    <div className="relative z-10">
                        <h3 className="text-muted-foreground text-3xl font-semibold sm:text-4xl">
                            Funcionalidades para sua vida financeira
                        </h3>
                        <p className="mt-3">
                            Pensamos em cada detalhe para que você tenha a
                            melhor experiência e focar no que realmente importa{" "}
                            <span className="text-green-500">
                                organizar sua vida financeira
                            </span>
                            !
                        </p>
                    </div>
                    <div
                        className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
                        style={{
                            background:
                                "linear-gradient(152.92deg, rgba(34, 197, 94, 0.2) 4.54%, rgba(0, 158, 59, 0.26) 34.2%, rgba(134, 255, 168, 0.1) 77.55%)",
                        }}
                    ></div>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3 p-4 border rounded-lg"
                            >
                                <div className="text-muted-foreground pb-3">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg text-muted-foreground font-semibold">
                                    {item.title}
                                </h4>
                                <p>{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
