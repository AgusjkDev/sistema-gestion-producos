"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components";
import CreationDialog from "./creation-dialog";

interface ActionsProps {
    search: string;
    handleSearch: (value: string) => void;
}

export default function Actions({ search, handleSearch }: ActionsProps) {
    return (
        <section className="flex gap-x-2.5">
            <Input
                type="search"
                placeholder="Buscar categoría"
                className="w-auto"
                value={search}
                onChange={e => handleSearch(e.target.value)}
            />

            <CreationDialog />

            <Button disabled tooltip="Filtrar categorías" variant="outline" size="icon">
                <Icons.Filter />
            </Button>
        </section>
    );
}
