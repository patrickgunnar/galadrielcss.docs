import type { Metadata } from "next";
import Image from "next/image";
import MainLayout from "@/components/main-layout";
import "./globals.css";

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
    return (
        <html lang="en">
            <body className="@layout:globalAppLayoutContext::bodyContainer">
                <Image
                    src="/img/aniket-deole-M6XC789HLe8-unsplash.jpg"
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
