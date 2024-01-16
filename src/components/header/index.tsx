import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Icons, WithTooltip } from "@/components";
import WindowControls from "./window-controls";

export default function Header() {
    const tooltip = "Ir al inicio";

    return (
        <header className="flex items-center justify-between border-b border-border px-5 py-2.5 2xl:px-16">
            <WithTooltip tooltip={tooltip}>
                <Link
                    aria-label={tooltip}
                    href="/"
                    className={buttonVariants({ variant: "outline", size: "icon" })}
                >
                    <Icons.Home />
                </Link>
            </WithTooltip>

            <h1 className="bg-gradient-to-br from-accent via-foreground to-accent bg-clip-text px-4 text-center text-xl font-black text-transparent">
                Sistema de Gestión de Productos
            </h1>

            <WindowControls />
        </header>
    );
}
