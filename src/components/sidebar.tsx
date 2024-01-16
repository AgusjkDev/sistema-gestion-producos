import Link, { type LinkProps } from "next/link";

import { buttonVariants } from "@/components/ui/button";
import Icons, { type IconElement } from "@/components/icons";
import { cn } from "@/lib/utils";

const SIDEBAR_ANCHORS: ({ key: string; icon: IconElement } & React.ComponentPropsWithoutRef<"a"> &
    LinkProps)[] = [
    {
        key: "categories",
        title: "Ir a categorías",
        children: "Categorías",
        href: "/categorias",
        icon: Icons.Category,
    },
    {
        key: "products",
        title: "Ir a productos",
        children: "Productos",
        href: "/productos",
        icon: Icons.Product,
    },
    {
        key: "stock",
        title: "Ver stock",
        children: "Stock",
        href: "/stock",
        icon: Icons.Stock,
    },
    {
        key: "settings",
        title: "Ir a ajustes",
        children: "Ajustes",
        href: "/ajustes",
        icon: Icons.Settings,
    },
];

export default function Sidebar() {
    return (
        <aside className="flex w-1/4 max-w-56 flex-shrink-0 flex-col gap-y-3 overflow-y-auto border-r border-border p-5">
            {SIDEBAR_ANCHORS.map(({ key, className, children, icon: Icon, ...props }) => (
                <Link
                    key={key}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "grid grid-cols-[1fr,4fr] text-sm last:mt-auto",
                        className,
                    )}
                    {...props}
                >
                    <Icon />

                    {children}
                </Link>
            ))}
        </aside>
    );
}
