import Image from "next/image";
import Link from "next/link";

function getSubheadings(): string {
    const subheadings = [
        "Galadriel CSS was not designed to be merely simple; it was crafted to be a powerful, advanced and robust solution.",
        "Galadriel CSS transcends simplicity; it is a high-performance, scalable framework designed to handle the most complex styling challenges.",
        "Galadriel CSS redefines styling with precision, merging modularity and power to deliver a framework built for advanced, real-world applications.",
        "Galadriel CSS empowers developers with unparalleled control, offering a scalable, context-driven approach to CSS that adapts to any project’s needs.",
        "Galadriel CSS isn't just another tool; it's a comprehensive, modern solution designed for developers who demand efficiency, flexibility, and performance.",
    ];

    return subheadings[Math.floor(Math.random() * subheadings.length)];
}

export default function Header() {
    const subheading = getSubheadings();

    return (
        <header className="@module:headerComponent::headerContainer">
            <Link href="/" className="@class:unstyledLink">
                <div className="@module:headerComponent::logoContainer">
                    <h1>Galadriel</h1>
                    <Image
                        src="/img/Galadriel CSS Logo.png"
                        alt="Galadriel CSS Logo"
                        className="@module:headerComponent::logoImage"
                        height={135}
                        width={135}
                    />
                    <h1>CSS</h1>
                </div>
            </Link>
            <div className="@module:headerComponent::subheadingContainer">
                <p>{subheading}</p>
            </div>
        </header>
    );
}
