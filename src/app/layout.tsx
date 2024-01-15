import type { Metadata } from "next";

import { Providers, Header, ThemeButton } from "@/components";

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
                    <div className="flex h-dvh flex-col">
                        <Header />

                        <div className="flex flex-1 overflow-hidden">
                            <div className="w-1/4 max-w-56 flex-shrink-0 overflow-y-auto">
                                <p>Sidebar</p>
                            </div>

                            <div className="w-full overflow-y-auto">
                                <div className="mx-auto w-[87.5%]">{children}</div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed bottom-6 right-6 z-[1]">
                        <ThemeButton />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
