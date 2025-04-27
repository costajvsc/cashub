import { toast } from "sonner";

interface IHandleToast {
    status: "success" | "error" | "warning" | "info";
    title: string;
    description: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export function HandleToast({
    status,
    title,
    description,
    action,
}: IHandleToast) {
    switch (status) {
        case "success":
            return toast.success(title, {
                description: description,
                action: action,
                actionButtonStyle: {
                    backgroundColor: "oklch(var(--muted-foreground))",
                    color: "oklch(var(--primary))",
                },
            });

        case "error":
            return toast.error(title, {
                description: description,
                action: action,
                actionButtonStyle: {
                    backgroundColor: "hsl(var(--muted))",
                    color: "hsl(var(--destructive))",
                },
            });

        case "info":
            return toast.info(title, {
                description: description,
                action: action,
                actionButtonStyle: {
                    backgroundColor: "hsl(var(--muted))",
                    color: "hsl(var(--info))",
                },
            });

        case "warning":
            return toast.warning(title, {
                description: description,
                action: action,
                actionButtonStyle: {
                    backgroundColor: "hsl(var(--muted-foreground))",
                    color: "hsl(var(--warning))",
                },
            });

        default:
            return toast(title, {
                description: description,
                action: action,
                actionButtonStyle: {
                    backgroundColor: "hsl(var(--muted-foreground))",
                    color: "hsl(var(--destructive))",
                },
            });
    }
}
