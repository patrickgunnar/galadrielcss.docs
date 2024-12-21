import { copyFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { relative, join, resolve, dirname } from "path";

function createMDXMetadata(dir, dirName) {
    if (!existsSync(dir)) return;

    readdirSync(dir, {
        recursive: true,
        withFileTypes: true,
    })
        .filter(
            (entry) =>
                (entry.isFile() && entry.name.endsWith("png")) ||
                entry.name.endsWith("jpg")
        )
        .forEach((entry) => {
            const relativePath = relative(
                dir,
                join(entry.parentPath, entry.name)
            );

            const sourcePath = join(dir, relativePath);

            if (!existsSync(sourcePath)) {
                return;
            }

            const publicPath = resolve("public", dirName, relativePath);

            if (existsSync(publicPath)) {
                return;
            }

            const publicDir = dirname(publicPath);

            if (!existsSync(publicDir)) {
                mkdirSync(publicDir, { recursive: true });
            }

            copyFileSync(sourcePath, publicPath);
        });
}

createMDXMetadata(resolve("src", "app", "blog"), "blog");
