import * as React from "react";
import type { WebviewWindow } from "@tauri-apps/api/window";

export default function useWindowControls() {
    const [currentWindow, setCurrentWindow] = React.useState<WebviewWindow | null>(null);

    async function minimize() {
        await currentWindow?.minimize();
    }

    async function close() {
        await currentWindow?.close();
    }

    React.useEffect(() => {
        import("@tauri-apps/api/window").then(({ appWindow }) => {
            setCurrentWindow(appWindow);
        });
    }, []);

    return { minimize, close };
}
