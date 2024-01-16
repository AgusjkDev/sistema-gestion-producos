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
        <aside className="flex h-full flex-col items-start gap-y-3 p-5">
            {SIDEBAR_ANCHORS.map(({ key, className, children, icon: Icon, ...props }) => (
                <Link
                    key={key}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "flex w-full justify-start gap-x-2.5 text-sm last:mt-auto",
                        className,
                    )}
                    {...props}
                >
                    <span className="flex-shrink-0">
                        <Icon />
                    </span>

                    {children}
                </Link>
            ))}
        </aside>
    );
}
