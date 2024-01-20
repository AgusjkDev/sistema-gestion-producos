"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { WithTooltip } from "@/components";
import { useMounted } from "@/hooks";
import InformationHoverCard from "./information-hover-card";
import UpdateDialog from "./update-dialog";
import DeleteDialog from "./delete-dialog";
import type { Category } from "@/stores";

interface CategoriesListProps {
    categories: Category[];
}

export default function CategoriesList({ categories }: CategoriesListProps) {
    const mounted = useMounted();

    return (
        <section className="flex flex-wrap gap-6">
            {!mounted
                ? Array.from({ length: 8 }).map((_, i) => (
                      <Skeleton key={i} className="h-[68px] w-full max-w-xs rounded-xl" />
                  ))
                : categories.map(category => {
                      const { id, name } = category;

                      return (
                          <article key={id} className="w-full max-w-xs">
                              <Card>
                                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                                      <WithTooltip tooltip={name}>
                                          <CardTitle className="truncate">{name}</CardTitle>
                                      </WithTooltip>

                                      <div className="flex gap-x-2">
                                          <InformationHoverCard category={category} />

                                          <UpdateDialog category={category} />

                                          <DeleteDialog category={category} />
                                      </div>
                                  </CardHeader>
                              </Card>
                          </article>
                      );
                  })}
        </section>
    );
}
