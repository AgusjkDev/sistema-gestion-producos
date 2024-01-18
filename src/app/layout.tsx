"use client";

import { usePathname } from "next/navigation";

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import { Providers, Header, Sidebar, ThemeButton } from "@/components";

import "@/styles/globals.css";

const PATHNAME_ENTRIES: Record<string, string> = {
    "/categorias": "Categorías",
    "/productos": "Productos",
    "/stock": "Stock",
    "/ajustes": "Ajustes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <html lang="es" suppressHydrationWarning>
            <body>
                <Providers>
                    <div className="flex h-dvh flex-col">
                        <Header />

                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel
                                className="scrollbar"
                                style={{ overflowY: "auto" }}
                                defaultSize={17.5}
                                minSize={12}
                            >
                                <Sidebar />
                            </ResizablePanel>

                            <ResizableHandle withHandle />

                            <ResizablePanel
                                className="scrollbar"
                                style={{ overflowY: "auto" }}
                                defaultSize={82.5}
                                minSize={29.5}
                            >
                                <div className="mx-auto w-[87.5%] space-y-6 py-12">
                                    <h2 className="font-mono text-xl font-bold capitalize">
                                        {PATHNAME_ENTRIES[pathname]}
                                    </h2>

                                    <Separator />

                                    {children}
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>

                    <div className="fixed bottom-6 right-6 z-[1]">
                        <ThemeButton />
                    </div>

                    <Toaster />
                </Providers>
            </body>
        </html>
    );
}
