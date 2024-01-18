import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { buttonVariants } from "@/components/ui/button";
import { WithTooltip, Icons } from "@/components";
import { formatDate } from "@/lib/utils";
import type { Category } from "@/stores";

interface InformationHoverCardProps {
    category: Category;
}

export default function InformationHoverCard({
    category: { createdAt, updatedAt },
}: InformationHoverCardProps) {
    return (
        <HoverCard openDelay={250} closeDelay={250}>
            <HoverCardTrigger>
                <WithTooltip tooltip="Información">
                    <span
                        tabIndex={0}
                        className={buttonVariants({ variant: "outline", size: "icon" })}
                    >
                        <Icons.Information />
                    </span>
                </WithTooltip>
            </HoverCardTrigger>

            <HoverCardContent className="flex flex-col items-start gap-y-2">
                <WithTooltip tooltip="Fecha de creación">
                    <div className="flex items-center gap-x-1">
                        <Icons.CalendarPlus />

                        <span className="text-xs text-muted-foreground">
                            {formatDate(createdAt)}
                        </span>
                    </div>
                </WithTooltip>

                <WithTooltip tooltip="Última actualización">
                    <div className="flex items-center gap-x-1">
                        <Icons.CalendarEdit />

                        <span className="text-xs text-muted-foreground">
                            {updatedAt ? formatDate(updatedAt) : "Nunca"}
                        </span>
                    </div>
                </WithTooltip>
            </HoverCardContent>
        </HoverCard>
    );
}
