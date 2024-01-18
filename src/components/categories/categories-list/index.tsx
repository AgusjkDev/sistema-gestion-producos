"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Icons, WithTooltip } from "@/components";
import { useMounted } from "@/hooks";
import { useCategories } from "@/stores";
import { formatDate } from "@/lib/utils";
import UpdateDialog from "./update-dialog";
import DeleteDialog from "./delete-dialog";

export default function CategoriesList() {
    const mounted = useMounted();
    const { categories } = useCategories();

    return (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {!mounted
                ? Array.from({ length: 8 }).map((_, i) => (
                      <Skeleton key={i} className="h-[68px] rounded-xl" />
                  ))
                : categories.map(category => {
                      const { id, name, createdAt, updatedAt } = category;

                      return (
                          <article key={id}>
                              <HoverCard openDelay={250} closeDelay={0}>
                                  <HoverCardTrigger asChild>
                                      <Card>
                                          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                                              <CardTitle>{name}</CardTitle>

                                              <div className="space-x-2">
                                                  <UpdateDialog category={category} />

                                                  <DeleteDialog category={category} />
                                              </div>
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
                                                  {updatedAt ? formatDate(updatedAt) : "Nunca"}
                                              </span>
                                          </div>
                                      </WithTooltip>
                                  </HoverCardContent>
                              </HoverCard>
                          </article>
                      );
                  })}
        </section>
    );
}
