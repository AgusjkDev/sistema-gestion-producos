import * as React from "react";

import { useCategories, type Category } from "@/stores";
import { trimSpaces } from "@/lib/utils";

export default function useCategoriesFilter() {
    const [search, setSearch] = React.useState<string>("");
    const [query, setQuery] = React.useState<string | null>(null);
    const [filteredCategories, setFilteredCategories] = React.useState<Category[] | null>(null);
    const { categories } = useCategories();

    function handleSearch(value: string) {
        setSearch(value);

        if (!value) return setQuery(null);

        const newQuery = trimSpaces(value);
        if (query === newQuery) return;

        setQuery(newQuery.toLowerCase());
    }

    React.useEffect(() => {
        if (!query) return setFilteredCategories(categories);

        setFilteredCategories(
            categories.filter(({ name }) => name.toLowerCase().startsWith(query)),
        );
    }, [categories, query]);

    return { search, handleSearch, categories: filteredCategories ?? categories };
}
