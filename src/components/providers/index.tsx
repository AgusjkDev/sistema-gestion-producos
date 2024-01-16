import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeProvider from "./theme-provider";

export default function Providers({ children }: React.PropsWithChildren) {
    return (
        <ThemeProvider>
            <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
    );
}
