import ThemeProvider from "./theme-provider";

export default function Providers({ children }: React.PropsWithChildren) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
