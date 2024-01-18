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
    categoryId: Category["id"];
}

export default function DeleteDialog({ categoryId }: DeleteDialogProps) {
    const { remove } = useCategories();

    function removeCategory() {
        const { success, error } = remove(categoryId);

        toast({
            description: success ? "Categoría eliminada satisfactoriamente" : error,
            variant: success ? "default" : "destructive",
        });
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button tooltip="Eliminar" variant="outline" size="icon">
                    <Icons.Trash />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
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
