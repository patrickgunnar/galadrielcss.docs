import Image from "next/image";
import { techStack, TechStackType } from "./data";

function TechStackItem({ tech, img }: TechStackType) {
    // <Icon className="@module:techStackComponent::techIcon" />
    return (
        <li className="@module:techStackComponent::techItem">
            <Image
                src={img}
                alt={tech}
                height={70}
                width={70}
                className="@module:techStackComponent::techIcon"
            />
            <span>{tech}</span>
        </li>
    );
}

export default function TechStack() {
    return (
        <section className="@module:techStackComponent::techStackSection">
            <h1 className="@module:techStackComponent::techStackTitle">
                Tech Stack of Galadriel CSS
            </h1>
            <ul className="@module:techStackComponent::techStackContainer">
                {techStack.map(({ id, tech, img }) => {
                    return (
                        <TechStackItem key={id} id={id} tech={tech} img={img} />
                    );
                })}
            </ul>
        </section>
    );
}
