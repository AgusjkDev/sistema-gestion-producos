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
import { useCategories, type Category } from "@/stores";
import { streetSchema } from "@/lib/schemas";

interface UpdateFormProps {
    category: Category;
    close: () => void;
}

export default function UpdateForm({ category, close }: UpdateFormProps) {
    const form = useForm<z.infer<typeof streetSchema>>({
        resolver: zodResolver(streetSchema),
        defaultValues: category,
    });
    const { update } = useCategories();

    function onSubmit(updatedCategory: z.infer<typeof streetSchema>) {
        const { success, error } = update({ ...category, ...updatedCategory });
        if (success) close();

        toast({
            description: success ? "Categoría actualizada satisfactoriamente." : error,
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
                                <Input placeholder={category.name} {...field} />
                            </FormControl>

                            <FormDescription>Nombre de la categoría</FormDescription>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <DialogFooter>
                    <Button tooltip="Actualizar categoría" type="submit">
                        Actualizar categoría
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
}
