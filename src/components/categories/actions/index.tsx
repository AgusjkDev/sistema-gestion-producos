"use client";

import { Input } from "@/components/ui/input";
import CreationDialog from "./creation-dialog";
import FiltersDialog from "./filters-dialog";
import type { CategoryFiltersSchema } from "@/lib/schemas";

interface ActionsProps {
    search: string;
    handleSearch: (value: string) => void;
    filters: CategoryFiltersSchema;
    handleFilters: (filters: CategoryFiltersSchema) => void;
}

export default function Actions({ search, handleSearch, filters, handleFilters }: ActionsProps) {
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

            <FiltersDialog filters={filters} handleFilters={handleFilters} />
        </section>
    );
}
