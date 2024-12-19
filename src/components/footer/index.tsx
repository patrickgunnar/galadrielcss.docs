import GaladrielLogo from "../logo";
import SocialMedia from "../social-media";

export default function Footer() {
    return (
        <footer className="@module:footerComponent::footerContainer">
            <GaladrielLogo />
            <span>
                Copyright © {new Date().getFullYear()} Patrick Gunnar. All
                rights reserved. Styled with Galadriel CSS.
            </span>
            <SocialMedia />
        </footer>
    );
}
