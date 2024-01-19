import * as z from "zod";

import { trimSpaces } from "./utils";

export const categorySchema = z.object({
    name: z
        .string()
        .transform(value => trimSpaces(value))
        .pipe(
            z
                .string()
                .min(3, {
                    message: "¡El nombre de la categoría debe contener por lo menos 3 caracteres!",
                })
                .max(32, { message: "¡El nombre de la categoría es demasiado extenso!" }),
        ),
});
export type CategorySchema = z.infer<typeof categorySchema>;

export const CRITERION_VALUES = ["name", "createdAt", "updatedAt", "use"] as const;
export const ORDER_VALUES = ["ASC", "DESC"] as const;
export const categoryFiltersSchema = z.object({
    criterion: z.enum(CRITERION_VALUES),
    order: z.enum(ORDER_VALUES),
    dateRange: z
        .object({
            from: z.number().optional(),
            to: z.number().optional(),
        })
        .optional(),
    hideEmpty: z.boolean(),
});
export type CategoryFiltersSchema = z.infer<typeof categoryFiltersSchema>;
