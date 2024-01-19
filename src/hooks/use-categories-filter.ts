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

    function handleSearch(value: string) {
        setSearch(value);

        if (!value) return setQuery(null);

        const newQuery = toCode(value);
        if (query === newQuery) return;

        setQuery(newQuery);
    }

    React.useEffect(() => {
        // TODO: Use filters

        if (!query) return setFilteredCategories(categories);

        setFilteredCategories(categories.filter(({ code }) => code.startsWith(query)));
    }, [categories, query]);

    return {
        search,
        handleSearch,
        filters,
        handleFilters: setFilters,
        categories: filteredCategories ?? categories,
    };
}
