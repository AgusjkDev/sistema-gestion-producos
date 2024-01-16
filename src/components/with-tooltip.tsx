"use client";

import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface WithTooltipProps {
    tooltip: string;
}

export default function WithTooltip({
    children,
    tooltip,
}: React.PropsWithChildren<WithTooltipProps>) {
    return (
        <Tooltip delayDuration={250}>
            <TooltipTrigger asChild>{children}</TooltipTrigger>

            <TooltipContent>
                <span aria-hidden className="select-none">
                    {tooltip}
                </span>
            </TooltipContent>
        </Tooltip>
    );
}
