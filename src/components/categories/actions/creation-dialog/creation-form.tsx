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
import { categorySchema } from "@/lib/schemas";

interface CreationFormProps {
    close: () => void;
}

export default function CreationForm({ close }: CreationFormProps) {
    const form = useForm<z.infer<typeof categorySchema>>({
        resolver: zodResolver(categorySchema),
        defaultValues: { name: "" },
    });
    const { add } = useCategories();

    function onSubmit(category: z.infer<typeof categorySchema>) {
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
