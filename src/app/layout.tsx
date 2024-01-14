import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "Sistema de Gestión de Productos",
    description: "Sistema de Gestión de Productos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
