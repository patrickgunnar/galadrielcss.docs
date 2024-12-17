import type { NextConfig } from "next";
import GaladrielWebpackClient from "galadrielcss/webpack-client";

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config) {
        config.plugins.unshift(new GaladrielWebpackClient());

        return config;
    },
};

export default nextConfig;
