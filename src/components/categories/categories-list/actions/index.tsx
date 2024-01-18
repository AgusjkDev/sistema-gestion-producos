import UpdateDialog from "./update-dialog";
import DeleteDialog from "./delete-dialog";
import type { Category } from "@/stores";

interface ActionsProps {
    category: Category;
}

export default function Actions({ category }: ActionsProps) {
    return (
        <div className="space-x-2">
            <UpdateDialog category={category} />

            <DeleteDialog category={category} />
        </div>
    );
}
