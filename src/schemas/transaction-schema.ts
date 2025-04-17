import { z } from "zod";
import {
    TransactionCategory,
    TransactionPaymentMethod,
    TransactionType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
    [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
    [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
    [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
    [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
    [TransactionPaymentMethod.CASH]: "money.svg",
    [TransactionPaymentMethod.PIX]: "pix.svg",
    [TransactionPaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORY_LABELS = {
    EDUCATION: "Educação",
    ENTERTAINMENT: "Entretenimento",
    FOOD: "Alimentação",
    HEALTH: "Saúde",
    HOUSING: "Moradia",
    OTHER: "Outros",
    SALARY: "Salário",
    TRANSPORTATION: "Transporte",
    UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
    BANK_TRANSFER: "Transferência Bancária",
    BANK_SLIP: "Boleto Bancário",
    CASH: "Dinheiro",
    CREDIT_CARD: "Cartão de Crédito",
    DEBIT_CARD: "Cartão de Débito",
    OTHER: "Outros",
    PIX: "Pix",
};
export const TRANSACTION_TYPE_OPTIONS = [
    {
        value: TransactionType.EXPENSE,
        label: "Despesa",
    },
    {
        value: TransactionType.DEPOSIT,
        label: "Depósito",
    },
    {
        value: TransactionType.INVESTMENT,
        label: "Investimento",
    },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
    {
        value: TransactionPaymentMethod.BANK_TRANSFER,
        label: TRANSACTION_PAYMENT_METHOD_LABELS[
            TransactionPaymentMethod.BANK_TRANSFER
        ],
    },
    {
        value: TransactionPaymentMethod.BANK_SLIP,
        label: TRANSACTION_PAYMENT_METHOD_LABELS[
            TransactionPaymentMethod.BANK_SLIP
        ],
    },
    {
        value: TransactionPaymentMethod.CASH,
        label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.CASH],
    },
    {
        value: TransactionPaymentMethod.CREDIT_CARD,
        label: TRANSACTION_PAYMENT_METHOD_LABELS[
            TransactionPaymentMethod.CREDIT_CARD
        ],
    },
    {
        value: TransactionPaymentMethod.DEBIT_CARD,
        label: TRANSACTION_PAYMENT_METHOD_LABELS[
            TransactionPaymentMethod.DEBIT_CARD
        ],
    },
    {
        value: TransactionPaymentMethod.OTHER,
        label: TRANSACTION_PAYMENT_METHOD_LABELS[
            TransactionPaymentMethod.OTHER
        ],
    },
    {
        value: TransactionPaymentMethod.PIX,
        label: TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethod.PIX],
    },
];
export const TRANSACTION_CATEGORY_OPTIONS = [
    {
        value: TransactionCategory.EDUCATION,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.EDUCATION],
    },
    {
        value: TransactionCategory.ENTERTAINMENT,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.ENTERTAINMENT],
    },
    {
        value: TransactionCategory.FOOD,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.FOOD],
    },
    {
        value: TransactionCategory.HEALTH,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HEALTH],
    },
    {
        value: TransactionCategory.HOUSING,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.HOUSING],
    },
    {
        value: TransactionCategory.OTHER,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.OTHER],
    },
    {
        value: TransactionCategory.SALARY,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.SALARY],
    },
    {
        value: TransactionCategory.TRANSPORTATION,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.TRANSPORTATION],
    },
    {
        value: TransactionCategory.UTILITY,
        label: TRANSACTION_CATEGORY_LABELS[TransactionCategory.UTILITY],
    },
];

export const TransactionSchema = z.object({
    name: z.string().trim().min(1, {
        message: "O nome é obrigatório.",
    }),
    amount: z
        .number({
            required_error: "O valor é obrigatório.",
        })
        .positive({
            message: "O valor deve ser positivo.",
        }),
    type: z.nativeEnum(TransactionType, {
        required_error: "O tipo é obrigatório.",
    }),
    category: z.nativeEnum(TransactionCategory, {
        required_error: "A categoria é obrigatória.",
    }),
    paymentMethod: z.nativeEnum(TransactionPaymentMethod, {
        required_error: "O método de pagamento é obrigatório.",
    }),
    date: z.date({
        required_error: "A data é obrigatória.",
    }),
});

export type TransactionSchemaType = z.infer<typeof TransactionSchema>;
