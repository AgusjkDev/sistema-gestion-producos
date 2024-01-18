import * as z from "zod";

import { trimSpaces } from "./utils";

export const streetSchema = z.object({
    name: z
        .string()
        .transform(trimSpaces)
        .pipe(
            z
                .string()
                .min(3, {
                    message: "¡El nombre de la categoría debe contener por lo menos 3 caracteres!",
                })
                .max(32, { message: "¡El nombre de la categoría es demasiado extenso!" }),
        ),
});
