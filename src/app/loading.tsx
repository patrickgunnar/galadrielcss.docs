import Image from "next/image";

export default function Loading() {
    return (
        <section className="@module:loadingComponent::loadingContainer">
            <span className="@module:loadingComponent::span @module:loadingComponent::a1">G</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a2">a</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a3">l</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a4">a</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a5">d</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a6">r</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a7">i</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a8">e</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a9">l</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a10"></span>
            <Image
                src="/img/Galadriel CSS Logo.png"
                alt="Galadriel CSS Logo"
                className="@module:loadingComponent::logoImage"
                height={135}
                width={135}
            />
            <span className="@module:loadingComponent::span @module:loadingComponent::a11">C</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a12">S</span>
            <span className="@module:loadingComponent::span @module:loadingComponent::a13">S</span>
        </section>
    );
}
