import { ReactNode } from "react";

export interface Ibutton {
    type?: 'submit' | 'reset' | 'button' | undefined;
    onclick?: () => void;
    children?: ReactNode;
}