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
import UpdateForm from "./update-form";
import type { Category } from "@/stores";

interface UpdateDialogProps {
    category: Category;
}

export default function UpdateDialog({ category }: UpdateDialogProps) {
    const [open, setOpen] = React.useState<boolean>(false);

    const tooltip = "Editar";

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button aria-label={tooltip} tooltip={tooltip} variant="outline" size="icon">
                    <Icons.Edit />
                </Button>
            </DialogTrigger>

            <DialogContent onCloseAutoFocus={e => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Edición de categoría</DialogTitle>

                    <DialogDescription>
                        Aquí podrás editar las propiedades de esta categoría&#46;
                    </DialogDescription>
                </DialogHeader>

                <UpdateForm category={category} close={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
