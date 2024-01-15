import type { Metadata } from "next";

import { Providers, ThemeButton } from "@/components";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Sistema de Gestión de Productos",
    description: "Sistema de Gestión de Productos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body>
                <Providers>
                    {children}

                    <div className="fixed bottom-6 right-6 z-[1]">
                        <ThemeButton />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
