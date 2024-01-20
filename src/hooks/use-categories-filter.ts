import * as React from "react";

import { useCategories, type Category } from "@/stores";
import { toCode } from "@/lib/utils";
import type { CategoryFiltersSchema } from "@/lib/schemas";

export default function useCategoriesFilter() {
    const [search, setSearch] = React.useState<string>("");
    const [query, setQuery] = React.useState<string | null>(null);
    const [filteredCategories, setFilteredCategories] = React.useState<Category[] | null>(null);
    const [filters, setFilters] = React.useState<CategoryFiltersSchema>({
        criterion: "name",
        order: "ASC",
        dateRange: undefined,
        hideEmpty: false,
    });
    const { categories } = useCategories();

    const sortingFunctions: Record<
        CategoryFiltersSchema["criterion"],
        (a: Category, b: Category) => number
    > = {
        name: (a, b) =>
            filters.order === "ASC" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
        createdAt: (a, b) =>
            filters.order === "ASC" ? a.createdAt - b.createdAt : b.createdAt - a.createdAt,
        updatedAt: (a, b) =>
            filters.order === "ASC"
                ? (a.updatedAt ?? 0) - (b.updatedAt ?? 0) || a.createdAt - b.createdAt
                : (b.updatedAt ?? 0) - (a.updatedAt ?? 0) || b.createdAt - a.createdAt,
        use: () => 0, // Not implemented
    };

    function handleSearch(value: string) {
        setSearch(value);

        if (!value) return setQuery(null);

        const newQuery = toCode(value);
        if (query === newQuery) return;

        setQuery(newQuery);
    }

    React.useEffect(() => {
        const filteredByQuery = categories.filter(({ code, createdAt, updatedAt }) => {
            if (query && !code.startsWith(query)) return false;

            if (!filters.dateRange) return true;

            const { from = -Infinity, to = Infinity } = filters.dateRange;

            const dateToCheck = filters.criterion === "updatedAt" ? updatedAt ?? 0 : createdAt;

            return dateToCheck >= from && dateToCheck <= to;
        });

        setFilteredCategories(filteredByQuery.toSorted(sortingFunctions[filters.criterion]));
    }, [categories, query, filters]);

    return {
        search,
        handleSearch,
        filters,
        handleFilters: setFilters,
        categories: filteredCategories ?? categories,
    };
}
