import { PlannedFeatureType, plannedFeatures } from "./data";
import { FaRocket } from "react-icons/fa";

function PlannedFeature({ title, description }: PlannedFeatureType) {
    return (
        <li className="@module:plannedFeatureComponent::featureContainer">
            <div className="@module:plannedFeatureComponent::featureTitleContainer">
                <FaRocket className="@module:plannedFeatureComponent::featureIcon" />
                <h4>{title}</h4>
            </div>
            <p className="@module:plannedFeatureComponent::featureDescription">
                {description}
            </p>
        </li>
    );
}

export default function PlannedFeatures() {
    return (
        <section className="@module:plannedFeatureComponent::sectionContainer">
            <h1 className="@module:plannedFeatureComponent::title">
                Planned Features
            </h1>
            <ul className="@module:plannedFeatureComponent::featuresContainer">
                {plannedFeatures.map(({ id, title, description }) => {
                    return (
                        <PlannedFeature
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                        />
                    );
                })}
            </ul>
        </section>
    );
}
