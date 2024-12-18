import Link from "next/link";
import { socialMedia, SocialMediaType } from "./data";

function SocialMediaItem({ label, link, icon: Icon }: SocialMediaType) {
    return (
        <Link
            href={link}
            className="@class:unstyledLink"
            aria-label={label}
            target="_blank"
        >
            <Icon />
        </Link>
    );
}

export default function SocialMedia() {
    return (
        <section className="@module:socialMediaComponent::sectionContainer">
            <div className="@module:socialMediaComponent::socialButtonsContainer">
                {socialMedia.map(({ icon, id, label, link }) => {
                    return (
                        <SocialMediaItem
                            key={id}
                            id={id}
                            label={label}
                            link={link}
                            icon={icon}
                        />
                    );
                })}
            </div>
            <div className="@module:socialMediaComponent::galadrielVersionContainer">
                Galadriel CSS 1.0.0.0-beta.0
            </div>
        </section>
    );
}