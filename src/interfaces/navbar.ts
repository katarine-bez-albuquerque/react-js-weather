import { FormEvent, ReactNode } from "react";

export interface Inavbar {
    onsubmit?: (e: FormEvent) => void; 
    children?: ReactNode;
}