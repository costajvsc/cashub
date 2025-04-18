"use client";

import * as React from "react";
import { format, startOfMonth, endOfMonth } from "date-fns";
import { CalendarIcon, Filter } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { TimeSelect } from "../dashboard/time-select";
import { useRouter, useSearchParams } from "next/navigation";
import { Separator } from "../ui/separator";

export function TransactionDatePicker({
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    const { push } = useRouter();
    const searchParams = useSearchParams();

    const monthParam = searchParams.get("month");

    const dafaultDate = new Date(
        new Date().getFullYear(),
        Number(monthParam) - 1
    );

    const [date, setDate] = React.useState<DateRange | undefined>({
        from: startOfMonth(monthParam ? dafaultDate : new Date()),
        to: endOfMonth(monthParam ? dafaultDate : new Date()),
    });

    function handleDateRangeChange() {
        if (date?.from && date?.to)
            push(
                `/transactions?from=${format(
                    date.from,
                    "yyyy-MM-dd"
                )}&to=${format(date.to, "yyyy-MM-dd")}`
            );
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Selecionar uma data</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <div className="w-full p-3 flex justify-between items-center">
                        <h3>Filtar transações</h3>
                        <TimeSelect />
                    </div>
                    <div className="py-2 px-3">
                        <Separator />
                    </div>
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                    <div className="w-full p-3 flex justify-end">
                        <Button
                            onClick={() => handleDateRangeChange()}
                            className="gap-1 flex items-center"
                        >
                            <Filter size={14} />
                            Filtar transações
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
