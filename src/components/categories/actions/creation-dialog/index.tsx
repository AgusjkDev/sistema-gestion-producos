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
import CreationForm from "./creation-form";

export default function CreationDialog() {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button tooltip="Crear categoría">Crear categoría</Button>
            </DialogTrigger>

            <DialogContent onCloseAutoFocus={e => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Creación de categoría</DialogTitle>

                    <DialogDescription>
                        Aquí podrás crear las categorías que serán asignadas a tus productos&#46;
                    </DialogDescription>
                </DialogHeader>

                <CreationForm close={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
}
