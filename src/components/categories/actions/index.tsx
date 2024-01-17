"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components";
import CreationDialog from "./creation-dialog";

export default function Actions() {
    return (
        <section className="flex gap-x-2.5">
            <Input placeholder="Buscar categoría" className="w-auto" />

            <CreationDialog />

            <Button disabled tooltip="Filtrar categorías" variant="outline" size="icon">
                <Icons.Filter />
            </Button>
        </section>
    );
}
