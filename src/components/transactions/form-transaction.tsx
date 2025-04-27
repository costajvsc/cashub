import {
    TransactionCategory,
    TransactionPaymentMethod,
    TransactionType,
} from "@prisma/client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { FormatMonetaryValue } from "@/lib/currency";
import {
    TRANSACTION_CATEGORY_OPTIONS,
    TRANSACTION_PAYMENT_METHOD_OPTIONS,
    TRANSACTION_TYPE_OPTIONS,
    TransactionSchema,
    TransactionSchemaType,
} from "@/schemas/transaction-schema";
import { CreateTransaction } from "@/actions/transactions/create-transaction";
import { UpdateTransaction } from "@/actions/transactions/update-transction";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, PanelTopClose, Save } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { HandleToast } from "@/lib/toast";

interface FormTransactionProps {
    defaultValues?: TransactionSchemaType;
    transactionId?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function FormTransaction({
    defaultValues,
    transactionId,
    open,
    setOpen,
}: FormTransactionProps) {
    const parsedData = defaultValues
        ? {
              ...defaultValues,
              date: new Date(defaultValues.date),
          }
        : {
              amount: 50,
              category: TransactionCategory.OTHER,
              date: new Date(),
              name: "",
              paymentMethod: TransactionPaymentMethod.PIX,
              type: TransactionType.EXPENSE,
          };
    const form = useForm<TransactionSchemaType>({
        resolver: zodResolver(TransactionSchema),
        defaultValues: parsedData,
    });

    const onSubmit = async (data: TransactionSchemaType) => {
        try {
            if (!defaultValues) return await CreateTransaction(data);

            if (transactionId !== undefined)
                return await UpdateTransaction({ ...data, id: transactionId });
        } catch (error) {
            console.error(error);
        } finally {
            setOpen(false);
            form.reset();

            const action = defaultValues ? "atualizada" : "criada";
            HandleToast({
                status: defaultValues ? "info" : "success",
                title: `Transação ${action}.`,
                description: `Transação ${data.name} foi ${action} com sucesso.`,
            });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome da transação</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Digite o nome..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Valor da transação</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="R$ 3.000,00"
                                    type="text"
                                    {...field}
                                    value={FormatMonetaryValue(field.value)}
                                    onChange={(e) => {
                                        const inputValue =
                                            e.target.value.replace(
                                                /[^\d]/g,
                                                ""
                                            );
                                        const numericValue =
                                            Number(inputValue) / 100;
                                        field.onChange(numericValue);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tipo</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {TRANSACTION_TYPE_OPTIONS.map((option) => (
                                        <SelectItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Categoria</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione a categoria..." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {TRANSACTION_CATEGORY_OPTIONS.map(
                                        (option) => (
                                            <SelectItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </SelectItem>
                                        )
                                    )}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Método de pagamento</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione um método de pagamento..." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {TRANSACTION_PAYMENT_METHOD_OPTIONS.map(
                                        (option) => (
                                            <SelectItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </SelectItem>
                                        )
                                    )}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Data</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Selecione a data</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-2 w-full justify-end">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setOpen(!open)}
                    >
                        <PanelTopClose size={16} />
                        Cancelar
                    </Button>
                    <Button type="submit">
                        <Save size={16} />
                        {defaultValues ? "Adicionar" : "Editar"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
