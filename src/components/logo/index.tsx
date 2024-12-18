import Image from "next/image";
import Link from "next/link";

export default function GaladrielLogo() {
    return (
        <Link href="/" className="@class:unstyledLink">
            <div className="@module:galadrielLogoComponent::logoContainer">
                <h1>Galadriel</h1>
                <Image
                    src="/img/Galadriel CSS Logo.png"
                    alt="Galadriel CSS Logo"
                    className="@module:galadrielLogoComponent::logoImage"
                    height={135}
                    width={135}
                />
                <h1>CSS</h1>
            </div>
        </Link>
    );
}
