import { generateId } from "@/lib/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Category = {
    id: string;
    name: string;
    createdAt: number;
    updatedAt: number | null;
};

type StoreReturnValue = { success: true; error: undefined } | { success: false; error: string };

interface CategoriesStore {
    categories: Category[];
    add: (category: Pick<Category, "name">) => StoreReturnValue;
    update: (category: Pick<Category, "id" | "name">) => StoreReturnValue;
    remove: (categoryId: Category["id"]) => StoreReturnValue;
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
            update: category => {
                let exists = false;
                for (let { id, name } of get().categories) {
                    if (id === category.id) {
                        exists = true;
                        continue;
                    }
                    if (name === category.name) {
                        return {
                            success: false,
                            error: "¡Ya existe una categoría con ese nombre!",
                        };
                    }
                }

                if (!exists) {
                    return { success: false, error: "¡Categoría inexistente!" };
                }

                set(state => ({
                    categories: state.categories.map(({ id, ...rest }) =>
                        id === category.id
                            ? { ...rest, ...category, updatedAt: Date.now() }
                            : { id, ...rest },
                    ),
                }));

                return { success: true };
            },
            remove: categoryId => {
                const exists = get().categories.some(({ id }) => id === categoryId);
                if (!exists) {
                    return { success: false, error: "¡Categoría inexistente!" };
                }

                set(state => ({
                    categories: state.categories.filter(({ id }) => id !== categoryId),
                }));

                return { success: true };
            },
        }),
        { name: "categories-store" },
    ),
);

export default useCategories;
