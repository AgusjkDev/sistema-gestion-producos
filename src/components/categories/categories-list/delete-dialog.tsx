import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Icons, WithTooltip } from "@/components";
import { useCategories, type Category } from "@/stores";

interface DeleteDialogProps {
    category: Category;
}

export default function DeleteDialog({ category }: DeleteDialogProps) {
    const { remove } = useCategories();

    function removeCategory() {
        const { success, error } = remove(category.id);

        toast({
            description: success ? "Categoría eliminada satisfactoriamente" : error,
            variant: success ? "default" : "destructive",
        });
    }

    const tooltip = "Eliminar";

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button aria-label={tooltip} tooltip={tooltip} variant="outline" size="icon">
                    <Icons.Trash />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent onCloseAutoFocus={e => e.preventDefault()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        &#191;Deseas realmente eliminar esta categoría&#63;
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        Esta acción no es reversible. Se eliminará de forma permanente.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <WithTooltip tooltip="Cancelar">
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    </WithTooltip>

                    <WithTooltip tooltip="Eliminar categoría">
                        <AlertDialogAction onClick={removeCategory}>
                            Eliminar categoría
                        </AlertDialogAction>
                    </WithTooltip>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
