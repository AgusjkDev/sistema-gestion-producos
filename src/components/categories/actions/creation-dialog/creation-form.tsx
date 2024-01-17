"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useCategories } from "@/stores";

const createStreetSchema = z.object({
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

type CreateStreetSchema = z.infer<typeof createStreetSchema>;

interface CreationFormProps {
    close: () => void;
}

export default function CreationForm({ close }: CreationFormProps) {
    const form = useForm<CreateStreetSchema>({
        resolver: zodResolver(createStreetSchema),
        defaultValues: { name: "" },
    });
    const { add } = useCategories();

    function onSubmit(category: CreateStreetSchema) {
        const { success, error } = add(category);
        if (success) close();

        toast({
            description: success ? "Categoría creada satisfactoriamente." : error,
            variant: success ? "default" : "destructive",
        });
    }

    return (
        <Form {...form}>
            <form
                autoComplete="off"
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-y-6"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>

                            <FormControl>
                                <Input placeholder="Ej: Informática" {...field} />
                            </FormControl>

                            <FormDescription>Nombre de la categoría</FormDescription>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <DialogFooter>
                    <Button tooltip="Crear categoría" type="submit">
                        Crear categoría
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
}
