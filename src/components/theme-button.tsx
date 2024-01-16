"use client";

import { useTheme } from "next-themes";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components";
import { useMounted } from "@/hooks";

export default function ThemeButton() {
    const mounted = useMounted();
    const { theme, setTheme } = useTheme();

    if (!mounted) {
        return <Skeleton className="aspect-square w-9" />;
    }

    function toggleTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const tooltip = "Cambiar tema";

    return (
        <Button
            aria-label={tooltip}
            tooltip={tooltip}
            variant="outline"
            size="icon"
            onClick={toggleTheme}
        >
            {theme === "dark" ? <Icons.Sun /> : <Icons.Moon />}
        </Button>
    );
}
