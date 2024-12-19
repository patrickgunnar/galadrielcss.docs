export type PlannedFeatureType = {
    id: string;
    title: string;
    description: string;
};

export const plannedFeatures: PlannedFeatureType[] = [
    {
        id: "actors-model-integration",
        title: "Actors Model Integration with Actix Framework",
        description:
            "Implement an Actors Model using the Actix framework to manage communication between Galadriel CSS components, replacing the current channel-based system.",
    },
    {
        id: "development-mode-without-terminal-ui",
        title: "Development Mode Without Terminal UI",
        description:
            "Introduce an option to run the development mode of Galadriel CSS without the terminal UI, providing more flexibility for developers.",
    },
    {
        id: "robust-testing-system",
        title: "Robust Testing System",
        description:
            "Develop a comprehensive testing system to ensure the integrity and reliability of Galadriel CSS, moving beyond simple verification tests.",
    },
    {
        id: "advanced-selectors-for-nenyr",
        title: "Advanced Selectors for Nenyr Parser",
        description:
            "Enhance the Nenyr parser by implementing advanced selectors, empowering Galadriel CSS to apply styles to components in more complex and powerful ways.",
    },
];
