import { create } from "zustand";
import { persist } from "zustand/middleware";

type Category = {
    name: string;
    createdAt: number;
    updatedAt: number | null;
};

interface CategoriesStore {
    categories: Category[];
    add: (
        category: Pick<Category, "name">,
    ) => { success: true; error: undefined } | { success: false; error: string };
}

const useCategories = create<CategoriesStore>()(
    persist(
        (set, get) => ({
            categories: [],
            add: category => {
                if (get().categories.find(({ name }) => name === category.name)) {
                    return { success: false, error: "¡Ya existe una categoría con ese nombre!" };
                }

                set(state => ({
                    categories: [
                        ...state.categories,
                        { ...category, createdAt: Date.now(), updatedAt: null },
                    ],
                }));

                return { success: true };
            },
        }),
        { name: "categories-store" },
    ),
);

export default useCategories;
