import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Providers, PageLayout, ThemeButton } from "@/components";

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
                <Providers>
                    <PageLayout>{children}</PageLayout>

                    <div className="fixed bottom-6 right-6 z-[1]">
                        <ThemeButton />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
