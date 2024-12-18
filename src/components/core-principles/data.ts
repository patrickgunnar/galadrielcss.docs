import { ElementType } from "react";
import {
    FcCloseUpMode,
    FcFlashOn,
    FcPuzzle,
    FcList,
    FcSettings,
    FcDonate,
    FcIdea,
} from "react-icons/fc";

export type CorePrincipleType = {
    id: string;
    icon: ElementType;
    principle: string;
};

export const corePrinciples: CorePrincipleType[] = [
    {
        id: "complex-styles-principle",
        principle: "Advanced Styles Application",
        icon: FcCloseUpMode,
    },
    {
        id: "dynamic-intelligent-principle",
        principle: "Dynamic and Intelligent",
        icon: FcFlashOn,
    },
    {
        id: "modular-structure-principle",
        principle: "Modular Structure",
        icon: FcPuzzle,
    },
    {
        id: "clean-organized-code-principle",
        principle: "Clean and Organized Code",
        icon: FcList,
    },
    {
        id: "utility-focused-ouput-principle",
        principle: "Utility-Focused Output",
        icon: FcSettings,
    },
    {
        id: "long-term-maintainability",
        principle: "Long-Term Maintainability",
        icon: FcDonate,
    },
    {
        id: "intelligent-styles-principle",
        principle: "Context-Aware Styles",
        icon: FcIdea,
    },
];
