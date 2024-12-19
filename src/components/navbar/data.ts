export type NavbarOptionType = {
    label: string;
    className: string[];
    link: string;
    id: string;
};

export const navbarOptions: NavbarOptionType[] = [
    {
        label: "HOME",
        link: "/",
        className: [
            "@module:navbarComponent::goldYellow",
            "@module:mobileNavbarComponent::goldYellow",
        ],
        id: "navbar-home-option",
    },
    {
        label: "SHOWCASE",
        link: "/showcase",
        className: [
            "@module:navbarComponent::coral",
            "@module:mobileNavbarComponent::coral",
        ],
        id: "navbar-showcase-option",
    },
    {
        label: "DONATION",
        link: "/donation",
        className: [
            "@module:navbarComponent::skyBlue",
            "@module:mobileNavbarComponent::skyBlue",
        ],
        id: "navbar-donation-option",
    },
    {
        label: "DOCS",
        link: "/docs",
        className: [
            "@module:navbarComponent::lightPink",
            "@module:mobileNavbarComponent::lightPink",
        ],
        id: "navbar-docs-option",
    },
    {
        label: "BLOG",
        link: "/blog",
        className: [
            "@module:navbarComponent::lavender",
            "@module:mobileNavbarComponent::lavender",
        ],
        id: "navbar-blog-option",
    },
    {
        label: "SEARCH",
        link: "/search",
        className: [
            "@module:navbarComponent::lightGray",
            "@module:mobileNavbarComponent::lightGray",
        ],
        id: "navbar-search-option",
    },
];
