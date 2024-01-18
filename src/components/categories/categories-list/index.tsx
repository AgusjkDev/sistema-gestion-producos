"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useMounted } from "@/hooks";
import { useCategories } from "@/stores";
import InformationHoverCard from "./information-hover-card";
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
                      const { id, name } = category;

                      return (
                          <article key={id}>
                              <Card>
                                  <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                                      <CardTitle>{name}</CardTitle>

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
