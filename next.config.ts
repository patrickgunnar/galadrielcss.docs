import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import GaladrielWebpackClient from "galadrielcss/webpack-client";

const nextConfig: NextConfig = {
    /* config options here */
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    webpack(config) {
        config.plugins.push(new GaladrielWebpackClient());

        return config;
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
