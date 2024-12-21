import { existsSync, readdirSync, readFileSync } from "node:fs";

export type MetadataMDX = {
    metadata: {
        url: string;
        title: string;
        description: string;
        creation_timestamp: string;
        order: number;
        tags: string[];
        author: string;
        is_published: boolean;
    };
    seo: {
        keywords: string[];
        robots: string[];
        og_image: string;
    };
};

export function routeMap(dir: string, routeName: string): MetadataMDX[] {
    if (!existsSync(dir)) return [];

    const entries = readdirSync(dir, {
        recursive: true,
        withFileTypes: true,
    });

    return entries
        .filter((entry) => entry.isFile() && entry.name.endsWith("page.json"))
        .map((entry) => {
            const data = readFileSync(
                `${entry.parentPath}/page.json`
            ).toString();

            const { seo, metadata } = JSON.parse(data);

            const url = `/${routeName}${metadata.url}`;
            const og_image = `/${routeName}/(posts)${metadata.url}/${seo.og_image}`;

            return {
                seo: {
                    ...seo,
                    og_image,
                },
                metadata: {
                    ...metadata,
                    url,
                },
            };
        });
}
