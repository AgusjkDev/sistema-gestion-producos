"use client";

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Providers, Header, Sidebar, ThemeButton } from "@/components";

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body>
                <Providers>
                    <div className="flex h-dvh flex-col">
                        <Header />

                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel style={{ overflowY: "auto" }} defaultSize={17.5}>
                                <Sidebar />
                            </ResizablePanel>

                            <ResizableHandle withHandle />

                            <ResizablePanel style={{ overflowY: "auto" }} defaultSize={82.5}>
                                {children}
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </div>

                    <div className="fixed bottom-6 right-6 z-[1]">
                        <ThemeButton />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
