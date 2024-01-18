"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Icons, WithTooltip } from "@/components";
import { useMounted } from "@/hooks";
import { useCategories } from "@/stores";
import { formatDate } from "@/lib/utils";
import Actions from "./actions";

export default function CategoriesList() {
    const mounted = useMounted();
    const { categories } = useCategories();

    return (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {!mounted
                ? Array.from({ length: 8 }).map((_, i) => (
                      <Skeleton key={i} className="h-[68px] rounded-xl" />
                  ))
                : categories.map(({ id, name, createdAt, updatedAt }) => (
                      <article key={id}>
                          <HoverCard>
                              <HoverCardTrigger asChild>
                                  <Card>
                                      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                                          <CardTitle>{name}</CardTitle>

                                          <Actions />
                                      </CardHeader>
                                  </Card>
                              </HoverCardTrigger>

                              <HoverCardContent className="space-y-2">
                                  <WithTooltip tooltip="Fecha de creación">
                                      <div className="inline-flex gap-x-1">
                                          <Icons.CalendarPlus />

                                          <span className="text-sm text-muted-foreground">
                                              {formatDate(createdAt)}
                                          </span>
                                      </div>
                                  </WithTooltip>

                                  <WithTooltip tooltip="Última actualización">
                                      <div className="inline-flex gap-x-1">
                                          <Icons.CalendarEdit />

                                          <span className="text-sm text-muted-foreground">
                                              {updatedAt ? formatDate(createdAt) : "Nunca"}
                                          </span>
                                      </div>
                                  </WithTooltip>
                              </HoverCardContent>
                          </HoverCard>
                      </article>
                  ))}
        </section>
    );
}
