"use client";

import { MetadataMDX } from "../../../route-map";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PAGE_SIZE = 6;

function PostCard({
    title,
    description,
    url,
    img_url,
}: {
    title: string;
    description: string;
    url: string;
    img_url: string;
}) {
    return (
        <li className="@module:blogGridComponent::blogCard">
            <Link
                href={url}
                className="@module:blogGridComponent::blogCardLink"
            >
                <Image
                    src={img_url}
                    alt={title}
                    className="@module:blogGridComponent::blogCardImage"
                    fill
                />
                <div className="@module:blogGridComponent::blogCardDescContainer">
                    <h3 className="@module:blogGridComponent::blogCardTitle">
                        {title}
                    </h3>
                    <p className="@module:blogGridComponent::blogCardDescription">
                        {description}
                    </p>
                </div>
            </Link>
        </li>
    );
}

export default function BlogGrid({ routes }: { routes: MetadataMDX[] }) {
    const [currentPage, setCurrentPage] = useState<number>(1);

    function paginatePage(
        routes: MetadataMDX[],
        pageSize: number,
        currentPageNum: number
    ) {
        const startIndex = (currentPageNum - 1) * pageSize;
        const endIndex = currentPageNum * pageSize;

        return routes.slice(startIndex, endIndex);
    }

    const currentItems = paginatePage(routes, PAGE_SIZE, currentPage);
    const isNextPagePermitted = currentPage * PAGE_SIZE < routes.length;
    const isPrevPagePermitted = currentPage > 1;

    function goToNextPage() {
        if (isNextPagePermitted) {
            setCurrentPage((prev) => prev + 1);
        }
    }

    function goToPrevPage() {
        if (isPrevPagePermitted) {
            setCurrentPage((prev) => prev - 1);
        }
    }

    return (
        <section className="@module:blogGridComponent::sectionContainer">
            {routes.length <= 0 && <p>No items to display right now.</p>}
            <ul className="@module:blogGridComponent::blogGrid">
                {currentItems.map((route) => {
                    return (
                        <PostCard
                            key={route.metadata.url}
                            title={route.metadata.title}
                            url={route.metadata.url}
                            img_url={route.seo.og_image}
                            description={route.metadata.description}
                        />
                    );
                })}
            </ul>
            <div className="@module:blogGridComponent::btnContainer">
                {isPrevPagePermitted && (
                    <button className="@class:btn" onClick={goToPrevPage}>
                        Previous
                    </button>
                )}
                {isNextPagePermitted && (
                    <button className="@class:btn" onClick={goToNextPage}>
                        Next
                    </button>
                )}
            </div>
        </section>
    );
}
