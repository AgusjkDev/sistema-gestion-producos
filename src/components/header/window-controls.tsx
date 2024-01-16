"use client";

import { WithTooltip, Icons } from "@/components";
import { useWindowControls } from "@/hooks";

export default function WindowControls() {
    const { minimize, close } = useWindowControls();

    return (
        <div className="flex gap-x-4">
            <WithTooltip tooltip="Minimizar">
                <button
                    className="group grid aspect-square w-6 place-items-center rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    onClick={minimize}
                >
                    <Icons.Minimize />
                </button>
            </WithTooltip>

            <button
                className="grid aspect-square w-6 place-items-center disabled:opacity-25"
                disabled
            >
                <Icons.Maximize />
            </button>

            <WithTooltip tooltip="Cerrar">
                <button
                    className="group grid aspect-square w-6 place-items-center rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    onClick={close}
                >
                    <Icons.Close />
                </button>
            </WithTooltip>
        </div>
    );
}
