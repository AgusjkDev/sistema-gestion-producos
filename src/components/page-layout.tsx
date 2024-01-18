"use client";

import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Header from "./header";
import Sidebar from "./sidebar";

const PATHNAME_ENTRIES: Record<string, string> = {
    "/categorias": "Categorías",
    "/productos": "Productos",
    "/stock": "Stock",
    "/ajustes": "Ajustes",
};

export default function PageLayout({ children }: React.PropsWithChildren) {
    const pathname = usePathname();

    return (
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
    );
}
