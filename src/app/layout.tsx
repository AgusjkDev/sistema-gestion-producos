import { Providers, PageLayout, ThemeButton } from "@/components";

import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body>
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
