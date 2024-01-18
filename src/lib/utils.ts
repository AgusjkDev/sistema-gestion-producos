import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import diacriticChars from "./diacritic-chars";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function trimSpaces(value: string, replaceValue: string = " ") {
    return value.trim().replace(/\s+/g, replaceValue);
}

export function toCode(value: string) {
    return trimSpaces(
        value.replace(/[^\w ]/g, c => diacriticChars[c] || ""),
        "-",
    ).toLowerCase();
}

export function generateId() {
    return Math.random().toString(36).slice(2);
}

export function formatDate(timestamp: number) {
    return new Intl.DateTimeFormat("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(timestamp);
}
