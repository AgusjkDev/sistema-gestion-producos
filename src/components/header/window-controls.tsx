"use client";

import { WithTooltip, Icons } from "@/components";
import { useWindowControls } from "@/hooks";

export default function WindowControls() {
    const { minimize, close } = useWindowControls();

    return (
        <div className="flex gap-x-6">
            <WithTooltip tooltip="Minimizar">
                <button className="group" onClick={minimize}>
                    <Icons.Minimize />
                </button>
            </WithTooltip>

            <button className="disabled:opacity-25" disabled>
                <Icons.Maximize />
            </button>

            <WithTooltip tooltip="Cerrar">
                <button className="group" onClick={close}>
                    <Icons.Close />
                </button>
            </WithTooltip>
        </div>
    );
}
