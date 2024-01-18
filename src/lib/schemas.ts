import * as z from "zod";

export const streetSchema = z.object({
    name: z
        .string()
        .transform(value => value.trim().replace(/\s+/g, " "))
        .pipe(
            z
                .string()
                .min(3, {
                    message: "¡El nombre de la categoría debe contener por lo menos 3 caracteres!",
                })
                .max(32, { message: "¡El nombre de la categoría es demasiado extenso!" }),
        ),
});
