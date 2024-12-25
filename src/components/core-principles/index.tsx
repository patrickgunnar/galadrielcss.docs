import Image from "next/image";
import { corePrinciples, CorePrincipleType } from "./data";

function CorePrinciple({ principle, icon: Icon }: CorePrincipleType) {
    return (
        <li className="@module:corePrinciplesComponent::principle">
            <Icon className="@module:corePrinciplesComponent::principleIcon" />
            <h4>{principle}</h4>
        </li>
    );
}

export default function CorePrinciples() {
    return (
        <section className="@module:corePrinciplesComponent::sectionContainer">
            <div className="@class:fullScreenAbsolute">
                <Image
                    src="/img/jasper-boer-1fUu0dratoM-unsplash.jpg"
                    alt="Core Principles Background Image"
                    className="@module:corePrinciplesComponent::backgroundImage"
                    fill
                />
                <div className="@module:corePrinciplesComponent::backgroundBlackLayer"></div>
            </div>
            <div className="@module:corePrinciplesComponent::corePrinciplesContainer">
                <h1 className="@module:corePrinciplesComponent::corePrinciplesTile">
                    CORE CONCEPTS OF GALADRIEL CSS
                </h1>
                <ul className="@module:corePrinciplesComponent::principlesBox">
                    {corePrinciples.map(({ id, principle, icon }) => {
                        return (
                            <CorePrinciple
                                key={id}
                                id={id}
                                principle={principle}
                                icon={icon}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
