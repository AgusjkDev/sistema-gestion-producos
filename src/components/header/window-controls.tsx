"use client";

import { Icons } from "@/components";
import { useWindowControls } from "@/hooks";

export default function WindowControls() {
    const { minimize, close } = useWindowControls();

    return (
        <div className="flex gap-x-6">
            <button className="group" onClick={minimize}>
                <Icons.Minimize />
            </button>

            <button className="disabled:opacity-25" disabled>
                <Icons.Maximize />
            </button>

            <button className="group" onClick={close}>
                <Icons.Close />
            </button>
        </div>
    );
}
