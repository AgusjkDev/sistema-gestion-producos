"use client";

import * as React from "react";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components";
import FiltersForm from "./filters-form";
import type { CategoryFiltersSchema } from "@/lib/schemas";

interface FiltersDialogProps {
    filters: CategoryFiltersSchema;
    handleFilters: (filters: CategoryFiltersSchema) => void;
}

export default function FiltersDialog({ filters, handleFilters }: FiltersDialogProps) {
    const [open, setOpen] = React.useState<boolean>(false);

    const tooltip = "Filtrar categorías";

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button aria-label={tooltip} tooltip={tooltip} variant="outline" size="icon">
                    <Icons.Filter />
                </Button>
            </DialogTrigger>

            <DialogContent onCloseAutoFocus={e => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Filtrar categorías</DialogTitle>

                    <DialogDescription>
                        Aquí podrás aplicar filtros a la búsqueda de categorías&#46;
                    </DialogDescription>
                </DialogHeader>

                <FiltersForm
                    filters={filters}
                    handleFilters={handleFilters}
                    close={() => setOpen(false)}
                />
            </DialogContent>
        </Dialog>
    );
}
