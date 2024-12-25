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
        principle: "Unlock Complex and Advanced Styling",
        icon: FcCloseUpMode,
    },
    {
        id: "dynamic-intelligent-principle",
        principle: "Dynamic, Intelligent CSS Generation",
        icon: FcFlashOn,
    },
    {
        id: "modular-structure-principle",
        principle: "Modular and Context-Based Structure",
        icon: FcPuzzle,
    },
    {
        id: "clean-organized-code-principle",
        principle: "Ensure Clean, Organized Codebases",
        icon: FcList,
    },
    {
        id: "utility-focused-output-principle",
        principle: "Utility-Driven CSS Output",
        icon: FcSettings,
    },
    {
        id: "long-term-maintainability",
        principle: "Focus on Long-Term Maintainability",
        icon: FcDonate,
    },
    {
        id: "intelligent-styles-principle",
        principle: "Context-Aware, Adaptive Styling",
        icon: FcIdea,
    },
];
