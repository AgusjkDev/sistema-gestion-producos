"use client";

import { Actions, CategoriesList } from "@/components/categories";
import { useCategoriesFilter } from "@/hooks";

export default function Categories() {
    const { search, handleSearch, filters, handleFilters, categories } = useCategoriesFilter();

    return (
        <main className="space-y-6">
            <Actions
                search={search}
                handleSearch={handleSearch}
                filters={filters}
                handleFilters={handleFilters}
            />

            <CategoriesList categories={categories} />
        </main>
    );
}
