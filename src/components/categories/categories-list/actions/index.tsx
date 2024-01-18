import { Button } from "@/components/ui/button";
import { Icons } from "@/components";
import DeleteDialog from "./delete-dialog";
import type { Category } from "@/stores";

interface ActionsProps {
    category: Category;
}

export default function Actions({ category }: ActionsProps) {
    return (
        <div className="space-x-2">
            <Button disabled tooltip="Editar" variant="outline" size="icon">
                <Icons.Edit />
            </Button>

            <DeleteDialog categoryId={category.id} />
        </div>
    );
}
