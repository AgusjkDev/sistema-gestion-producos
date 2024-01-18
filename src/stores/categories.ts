import { generateId } from "@/lib/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Category = {
    id: string;
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
                        { id: generateId(), createdAt: Date.now(), updatedAt: null, ...category },
                    ],
                }));

                return { success: true };
            },
        }),
        { name: "categories-store" },
    ),
);

export default useCategories;
