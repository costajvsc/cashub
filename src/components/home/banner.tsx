import { Github } from "lucide-react";
import Link from "next/link";

export function Banner() {
    return (
        <div className="bg-green-600">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white sm:items-center md:px-8">
                <div className="flex-1 justify-center flex flex-col md:flex-row items-center gap-x-4">
                    <div className="flex-none p-1.5 px-4 rounded-full bg-green-800 flex items-center justify-center font-medium text-sm">
                        News
                    </div>
                    <p className="font-medium p-2">
                        Projeto open-source com atualizações frequentes!{" "}
                        <Link
                            href="https://github.com/costajvsc/cashub"
                            className="font-semibold underline duration-150 hover:text-green-100 inline-flex items-center gap-x-1"
                        >
                            <Github size={16} />
                            Saiba mais
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
