import { Button } from "@/components/ui/button";
import { Icons } from "@/components";

export default function Actions() {
    return (
        <div className="space-x-2">
            <Button disabled tooltip="Editar" variant="outline" size="icon">
                <Icons.Edit />
            </Button>

            <Button disabled tooltip="Eliminar" variant="outline" size="icon">
                <Icons.Trash />
            </Button>
        </div>
    );
}
