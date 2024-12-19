export default function Contribute() {
    const spanClassNames = "@module:contributeComponent::textFormatting";

    return (
        <section className="@module:contributeComponent::sectionContainer">
            <h1 className="@module:contributeComponent::title">
                Contribute as a Developer
            </h1>
            <div className="@module:contributeComponent::contentContainer">
                <p>
                    Galadriel CSS is a powerful, innovative framework that I
                    envisioned to bring a highly modular and efficient CSS
                    management system to the developer community. Built using
                    Rust for its core functionality and TypeScript for bundler
                    integrations,{" "}
                    <span className={spanClassNames}>Galadriel CSS</span> aims
                    to offer an optimized way of managing CSS in web
                    applications. The framework is designed to scale, maintain
                    clear and efficient code, and reduce redundant styles across
                    projects. Its flexibility and efficiency offer significant
                    benefits to developers, allowing them to focus more on
                    building great products without worrying about managing
                    bloated CSS. Until now, I&apos;ve built and maintained the
                    entire framework on my own, but as the project grows,
                    additional help and expertise are needed to ensure its
                    continued success and evolution. If you&apos;re passionate
                    about improving CSS workflows and want to make an impact,
                    your contributions can help Galadriel CSS reach new heights.
                </p>
                <h3 className="@module:contributeComponent::subheading">
                    Areas to Contribute
                </h3>
                <div className="@module:contributeComponent::areasContainer">
                    <ul className="@module:contributeComponent::ulContainer">
                        <li>
                            <span className={spanClassNames}>
                                Typescript Developers
                            </span>
                            :
                            <ul className="@module:contributeComponent::ulContainer">
                                <li>
                                    {"\u{25CF}"} Build integration clients
                                    (plugins) for popular bundlers such as{" "}
                                    <span className={spanClassNames}>Vite</span>
                                    ,{" "}
                                    <span className={spanClassNames}>
                                        ESBuild
                                    </span>
                                    ,{" "}
                                    <span className={spanClassNames}>
                                        Rollup
                                    </span>
                                    ,{" "}
                                    <span className={spanClassNames}>
                                        Parcel
                                    </span>
                                    , and more. This will help expand the reach
                                    of{" "}
                                    <span className={spanClassNames}>
                                        Galadriel CSS
                                    </span>{" "}
                                    into various development environments.
                                </li>
                                <li>
                                    {"\u{25CF}"} Help maintain and improve the{" "}
                                    <span className={spanClassNames}>
                                        documentation website
                                    </span>
                                    , which is built with{" "}
                                    <span className={spanClassNames}>
                                        Next.js
                                    </span>{" "}
                                    and styled using{" "}
                                    <span className={spanClassNames}>
                                        Galadriel CSS
                                    </span>
                                    . The site uses Markdown content to render
                                    the documentation, and there are
                                    opportunities to enhance both its
                                    functionality and content. Contributions
                                    could include improving the website&apos;s
                                    user interface, adding new sections, or
                                    optimizing the website for better
                                    performance and accessibility.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span className={spanClassNames}>
                                Rust Developers
                            </span>
                            :
                            <ul className="@module:contributeComponent::ulContainer">
                                <li>
                                    {"\u{25CF}"} Contribute by adding new
                                    features to the core of Galadriel CSS,
                                    improving its performance, and fixing bugs.
                                </li>
                                <li>
                                    {"\u{25CF}"} Assist with writing tests and
                                    resolving issues to help make the framework
                                    more robust and reliable.
                                </li>
                                <li>
                                    {"\u{25CF}"} Help expand{" "}
                                    <span className={spanClassNames}>
                                        Galadriel CSS
                                    </span>{" "}
                                    by integrating new Rust crates such as{" "}
                                    <span className={spanClassNames}>
                                        tokio
                                    </span>
                                    ,{" "}
                                    <span className={spanClassNames}>
                                        notify
                                    </span>
                                    ,{" "}
                                    <span className={spanClassNames}>axum</span>
                                    , and{" "}
                                    <span className={spanClassNames}>
                                        ratatui
                                    </span>
                                    , or even implementing new ones.
                                </li>
                                <li>
                                    {"\u{25CF}"} Contribute to the development
                                    and testing of the{" "}
                                    <span className={spanClassNames}>
                                        Nenyr
                                    </span>{" "}
                                    parser. This includes adding advanced
                                    parsing features and uncovering and fixing
                                    any bugs that might arise.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <p>
                    Both Rust and Typescript developers have a vital role in
                    enhancing and expanding Galadriel CSS to benefit the broader
                    community.
                </p>
                <h3 className="@module:contributeComponent::subheading">
                    Get In Touch
                </h3>
                <p>
                    If you&apos;re interested in contributing or if you have any
                    questions, please don&apos;t hesitate to reach out! You can
                    contact me directly at{" "}
                    <span className={spanClassNames}>
                        galadrielcss@gmail.com
                    </span>
                    . Your feedback and contributions will be highly valued, and
                    together we can make{" "}
                    <span className={spanClassNames}>Galadriel CSS</span> an
                    even more powerful tool for the development community.
                </p>
            </div>
        </section>
    );
}
