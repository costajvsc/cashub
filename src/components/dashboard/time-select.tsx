"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
    { value: "01", label: "Janeiro" },
    { value: "02", label: "Fevereiro" },
    { value: "03", label: "Março" },
    { value: "04", label: "Abril" },
    { value: "05", label: "Maio" },
    { value: "06", label: "Junho" },
    { value: "07", label: "Julho" },
    { value: "08", label: "Agosto" },
    { value: "09", label: "Setembro" },
    { value: "10", label: "Outobro" },
    { value: "11", label: "Novembro" },
    { value: "12", label: "Dezembro" },
];

export function TimeSelect() {
    const { push } = useRouter();
    const searchParams = useSearchParams();
    const month = searchParams.get("month");
    const pathName = usePathname();

    const handleMonthChange = (month: string) => {
        push(`${pathName}?month=${month}`);
    };
    return (
        <Select
            onValueChange={(value) => handleMonthChange(value)}
            defaultValue={month ?? ""}
        >
            <SelectTrigger className="w-[150px] rounded-full">
                <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
                {MONTH_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
