import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components";

export default function Header() {
    const accessibilityText = "Ir al inicio";

    return (
        <header className="flex items-center justify-between border-b border-border px-8 py-2.5 2xl:px-16">
            <Link
                aria-label={accessibilityText}
                title={accessibilityText}
                href="/"
                className={buttonVariants({ variant: "outline", size: "icon" })}
            >
                <Icons.Home />
            </Link>

            <h1 className="bg-gradient-to-br from-accent via-foreground to-accent bg-clip-text px-4 text-center text-xl font-black text-transparent">
                Sistema de Gestión de Productos
            </h1>

            <Button disabled>Call to action</Button>
        </header>
    );
}
