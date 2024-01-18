"use client";

import { Actions, CategoriesList } from "@/components/categories";
import { useCategoriesFilter } from "@/hooks";

export default function Categories() {
    const { search, handleSearch, categories } = useCategoriesFilter();

    return (
        <main className="space-y-6">
            <Actions search={search} handleSearch={handleSearch} />

            <CategoriesList categories={categories} />
        </main>
    );
}
