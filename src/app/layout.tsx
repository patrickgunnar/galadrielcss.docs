import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import MainLayout from "@/components/main-layout";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Galadriel CSS - Galadriel CSS is a cutting-edge framework designed to create modular and scalable styling. Powered by the Nenyr language, it streamlines the styling process with intelligent features.",
    description:
        "Galadriel CSS is a cutting-edge framework designed to create modular and scalable styling. Powered by the Nenyr language, it streamlines the styling process with intelligent features.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const images = [
        "/img/aniket-deole-M6XC789HLe8-unsplash.jpg",
        "/img/anton-repponen-zNxlvCZhHNA-unsplash.jpg",
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} @layout:globalAppLayoutContext::bodyContainer`}
            >
                <Image
                    src={randomImage}
                    alt="Background Image"
                    className="@layout:globalAppLayoutContext::backgroundImage"
                    fill
                />
                <div className="@layout:globalAppLayoutContext::mainContainer">
                    <MainLayout>{children}</MainLayout>
                </div>
            </body>
        </html>
    );
}
