import Link, { type LinkProps } from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { WithTooltip } from "@/components";
import Icons, { type IconElement } from "@/components/icons";
import { cn } from "@/lib/utils";

const SIDEBAR_ANCHORS: ({
    key: string;
    icon: IconElement;
    tooltip: string;
} & React.ComponentPropsWithoutRef<"a"> &
    LinkProps)[] = [
    {
        key: "categories",
        tooltip: "Ir a categorías",
        children: "Categorías",
        href: "/categorias",
        icon: Icons.Category,
    },
    {
        key: "products",
        tooltip: "Ir a productos",
        children: "Productos",
        href: "/productos",
        icon: Icons.Product,
    },
    {
        key: "stock",
        tooltip: "Ver stock",
        children: "Stock",
        href: "/stock",
        icon: Icons.Stock,
    },
    {
        key: "settings",
        tooltip: "Ir a ajustes",
        children: "Ajustes",
        href: "/ajustes",
        icon: Icons.Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="flex h-full flex-col items-start gap-y-3 p-5">
            {SIDEBAR_ANCHORS.map(({ key, className, children, icon: Icon, tooltip, ...props }) => (
                <span key={key} className="w-full last:mt-auto">
                    <WithTooltip tooltip={tooltip}>
                        <Link
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "flex justify-start gap-x-2.5 text-sm",
                                className,
                            )}
                            {...props}
                        >
                            <span className="flex-shrink-0">
                                <Icon />
                            </span>

                            {children}
                        </Link>
                    </WithTooltip>
                </span>
            ))}
        </aside>
    );
}
