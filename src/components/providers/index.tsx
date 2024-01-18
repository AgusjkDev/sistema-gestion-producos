"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "./theme-provider";

export default function Providers({ children }: React.PropsWithChildren) {
    return (
        <ThemeProvider>
            <TooltipProvider>
                {children}

                <Toaster />
            </TooltipProvider>
        </ThemeProvider>
    );
}
