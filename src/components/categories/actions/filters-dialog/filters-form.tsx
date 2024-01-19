"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
} from "@/components/ui/form";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { DialogFooter } from "@/components/ui/dialog";
import { WithTooltip, Icons } from "@/components";
import {
    CRITERION_VALUES,
    ORDER_VALUES,
    categoryFiltersSchema,
    type CategoryFiltersSchema,
} from "@/lib/schemas";
import { formatDate } from "@/lib/utils";

const CRITERIA: ({
    value: (typeof CRITERION_VALUES)[number];
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof SelectItem>)[] = [
    { value: "name", children: "Orden alfabético" },
    { value: "createdAt", children: "Fecha de creación" },
    { value: "updatedAt", children: "Última actualización" },
    { value: "use", children: "Cantidad de productos", disabled: true },
];

const ORDERS: ({
    value: (typeof ORDER_VALUES)[number];
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof SelectItem>)[] = [
    { value: "ASC", children: "Ascendente" },
    { value: "DESC", children: "Descendente" },
];

interface FiltersFormProps {
    filters: CategoryFiltersSchema;
    handleFilters: (filters: CategoryFiltersSchema) => void;
    close: () => void;
}

export default function FiltersForm({ filters, handleFilters, close }: FiltersFormProps) {
    const form = useForm<CategoryFiltersSchema>({
        resolver: zodResolver(categoryFiltersSchema),
        defaultValues: filters,
    });

    function onSubmit(values: CategoryFiltersSchema) {
        handleFilters(values);
        close();
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
                    name="criterion"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Criterio</FormLabel>

                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <span className="block">
                                        <WithTooltip tooltip="Seleccionar criterio">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                        </WithTooltip>
                                    </span>
                                </FormControl>

                                <SelectContent>
                                    {CRITERIA.map(criterion => (
                                        <SelectItem key={criterion.value} {...criterion} />
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="order"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Orden</FormLabel>

                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <span className="block">
                                        <WithTooltip tooltip="Seleccionar orden">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                        </WithTooltip>
                                    </span>
                                </FormControl>

                                <SelectContent>
                                    {ORDERS.map(order => (
                                        <SelectItem key={order.value} {...order} />
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="dateRange"
                    render={({ field }) => {
                        const date = field.value;
                        const { from, to } = date ?? {};

                        const dateText =
                            from && to ? (
                                `${formatDate(from, "medium")} — ${formatDate(to, "medium")}`
                            ) : from ? (
                                formatDate(from, "medium")
                            ) : (
                                <span>Seleccionar rango de fechas</span>
                            );

                        const today = new Date();
                        const defaultMonth = new Date(today.setMonth(today.getMonth() - 1));

                        return (
                            <FormItem>
                                <FormLabel>Rango de fechas</FormLabel>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <span className="block">
                                                <Button
                                                    tooltip="Seleccionar rango de fechas"
                                                    type="button"
                                                    className="w-full justify-start gap-x-1 font-normal"
                                                    variant="outline"
                                                >
                                                    <Icons.Calendar />

                                                    {dateText}
                                                </Button>
                                            </span>
                                        </FormControl>
                                    </PopoverTrigger>

                                    <PopoverContent className="w-auto p-0" side="top">
                                        <Calendar
                                            initialFocus
                                            mode="range"
                                            numberOfMonths={3}
                                            defaultMonth={defaultMonth}
                                            selected={{
                                                from: from ? new Date(from) : undefined,
                                                to: to ? new Date(to) : undefined,
                                            }}
                                            onSelect={dateRange => {
                                                field.onChange({
                                                    from: dateRange?.from?.getTime(),
                                                    to: dateRange?.to?.getTime(),
                                                });
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="hideEmpty"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                                <FormLabel>Ocultar categorías sin productos</FormLabel>

                                <FormDescription>
                                    Este filtro podría mejorar los resultados esperados&#46;
                                </FormDescription>
                            </div>

                            <FormControl>
                                <Switch
                                    disabled
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <DialogFooter>
                    <Button tooltip="Aplicar filtros" type="submit">
                        Aplicar filtros
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
}
