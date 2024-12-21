import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => {
            return <h1 className="@module:mdxComponents::h1">{children}</h1>;
        },
        h2: (props: HeadingProps) => (
            <h2 className="@module:mdxComponents::h2" {...props} />
        ),
        h3: (props: HeadingProps) => (
            <h3 className="@module:mdxComponents::h3" {...props} />
        ),
        h4: (props: HeadingProps) => (
            <h4 className="@module:mdxComponents::h4" {...props} />
        ),
        h5: (props: HeadingProps) => (
            <h5 className="@module:mdxComponents::h5" {...props} />
        ),
        h6: (props: HeadingProps) => (
            <h6 className="@module:mdxComponents::h6" {...props} />
        ),
        p: (props: ParagraphProps) => (
            <p className="@module:mdxComponents::p" {...props} />
        ),
        ol: (props: ListProps) => (
            <ol className="@module:mdxComponents::ol" {...props} />
        ),
        ul: (props: ListProps) => (
            <ul className="@module:mdxComponents::ul" {...props} />
        ),
        li: (props: ListItemProps) => (
            <li className="@module:mdxComponents::li" {...props} />
        ),
        em: (props: ComponentPropsWithoutRef<"em">) => (
            <em className="@module:mdxComponents::em" {...props} />
        ),
        strong: (props: ComponentPropsWithoutRef<"strong">) => (
            <strong className="@module:mdxComponents::strong" {...props} />
        ),
        a: ({ href, children, ...props }: AnchorProps) => {
            const clsName = "@module:mdxComponents::a";

            if (href?.startsWith("/")) {
                return (
                    <Link className={clsName} href={href} {...props}>
                        {children}
                    </Link>
                );
            } else if (href?.startsWith("#")) {
                return (
                    <a className={clsName} href={href} {...props}>
                        {children}
                    </a>
                );
            }

            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsName}
                    {...props}
                >
                    {children}
                </a>
            );
        },
        code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
            const codeHTML = highlight(children as string);

            return (
                <code
                    className="@module:mdxComponents::code"
                    dangerouslySetInnerHTML={{ __html: codeHTML }}
                    {...props}
                />
            );
        },
        Table: ({
            data,
        }: {
            data: { headers: string[]; rows: string[][] };
        }) => (
            <table className="@module:mdxComponents::table">
                <thead>
                    <tr>
                        {data.headers.map((header, index) => (
                            <th
                                className="@module:mdxComponents::th"
                                key={index}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    className="@module:mdxComponents::td"
                                    key={cellIndex}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        ),
        blockquote: (props: BlockquoteProps) => (
            <blockquote
                className="@module:mdxComponents::blockquote"
                {...props}
            />
        ),
        ...components,
    };
}
