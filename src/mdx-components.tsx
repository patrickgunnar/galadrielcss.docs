import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import hljs from "highlight.js/lib/core";
import js from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("javascript", js);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("nenyr", function () {
    return {
        keywords: "context style animation variable theme",
        contains: [
            // Declare statements
            {
                className: "keyword",
                begin: "\\b(Construct|Declare)\\b",
            },
            {
                className: "section",
                begin: "\\b(Central|Layout|Module|Extending)\\b",
            },
            // Handlers
            {
                className: "section",
                begin: "\\b(Imports|Typefaces|Aliases|Variables|Breakpoints|Themes|Class|Deriving|Animation)\\b",
            },
            // Nested contexts
            {
                className: "built_in",
                begin: "\\b(Fraction|Progressive|From|Halfway|To|Import|MobileFirst|DesktopFirst|Light|Dark|Important|PanoramicViewer|Stylesheet|Hover|Active|Focus|FirstChild|LastChild|FirstOfType|LastOfType|OnlyChild|OnlyOfType|TargetPseudoClass|Visited|Checked|Disabled|Enabled|ReadOnly|ReadWrite|PlaceholderShown|Valid|Invalid|Required|Optional|Fullscreen|FocusWithin|FirstLine|FirstLetter|Before|After|OutOfRange|Root|FirstPage|LeftPage|RightPage|Empty)\\b",
            },
            // Properties
            {
                className: "variable",
                begin: "\\b(aspectRatio|accentColor|backdropFilter|content|gap|rowGap|scale|order|pointerEvents|margin|marginBottom|marginLeft|marginRight|marginTop|padding|paddingBottom|paddingLeft|paddingRight|paddingTop|height|width|filter|maxHeight|maxWidth|minHeight|minWidth|border|borderBottom|borderBottomColor|borderBottomStyle|borderBottomWidth|borderColor|borderLeft|borderLeftColor|borderLeftStyle|borderLeftWidth|borderRight|borderRightColor|borderRightStyles|borderRightWidth|borderStyle|borderTop|borderTopColor|borderTopStyle|borderTopWidth|borderWidth|outline|outlineColor|outlineStyle|outlineWidth|borderBottomLeftRadius|borderBottomRightRadius|borderImage|borderImageOutset|borderImageRepeat|borderImageSlice|borderImageSource|borderImageWidth|borderRadius|borderTopLeftRadius|borderTopRightRadius|boxDecorationBreak|boxShadow|background|backgroundAttachment|backgroundColor|backgroundImage|backgroundPosition|backgroundPositionX|backgroundPositionY|backgroundRepeat|backgroundClip|backgroundOrigin|backgroundSize|backgroundBlendMode|colorProfile|opacity|renderingIntent|font|fontFamily|fontSize|fontStyle|fontVariant|fontWeight|fontSizeAdjust|fontStretch|positioning|bottom|clear|clipPath|cursor|display|float|left|overflow|position|right|top|visibility|zIndex|color|direction|flexDirection|flexWrap|letterSpacing|lineHeight|lineBreak|textAlign|textDecoration|textIndent|textTransform|unicodeBidi|verticalAlign|whiteSpace|wordSpacing|textOutline|textOverflow|textShadow|textWrap|wordBreak|wordWrap|listStyle|listStyleImage|listStylePosition|listStyleType|borderCollapse|borderSpacing|captionSide|emptyCells|tableLayout|marqueeDirection|marqueePlayCount|marqueeSpeed|marqueeStyle|overflowX|overflowY|overflowStyle|rotation|boxAlign|boxDirection|boxFlex|boxFlexGroup|boxLines|boxOrdinalGroup|boxOrient|boxPack|alignmentAdjust|alignmentBaseline|baselineShift|dominantBaseline|dropInitialAfterAdjust|dropInitialAfterAlign|dropInitialBeforeAdjust|dropInitialBeforeAlign|dropInitialSize|dropInitialValue|inlineBoxAlign|lineStacking|lineStackingRuby|lineStackingShift|lineStackingStrategy|textHeight|columnCount|columnFill|columnGap|columnRule|columnRuleColor|columnRuleStyle|columnRuleWidth|columnSpan|columnWidth|columns|animation|animationName|animationDuration|animationTimingFunction|animationDelay|animationFillMode|animationIterationCount|animationDirection|animationPlayState|transform|transformOrigin|transformStyle|perspective|perspectiveOrigin|backfaceVisibility|transition|transitionProperty|transitionDuration|transitionTimingFunction|transitionDelay|orphans|pageBreakAfter|pageBreakBefore|pageBreakInside|widows|mark|markAfter|markBefore|phonemes|rest|restAfter|restBefore|voiceBalance|voiceDuration|voicePitch|voicePitchRange|voiceRate|voiceStress|voiceVolume|appearance|boxSizing|icon|navDown|navIndex|navLeft|navRight|navUp|outlineOffset|resize|quotes|rotate|translate|userSelect|writingMode|objectPosition|objectFit|justifySelf|justifyContent|justifyItems|alignSelf|alignContent|alignItems|grid|gridArea|gridAutoColumns|gridAutoFlow|gridAutoRows|gridColumn|gridColumnEnd|gridColumnStart|gridRow|gridRowEnd|gridRowStart|gridTemplate|gridTemplateAreas|gridTemplateColumns|gridTemplateRows|scrollbarColor|scrollbarWidth|scrollbarGutter)\\b",
            },
            // Numbers
            {
                className: "number",
                begin: "\\b\\d+(\\.\\d+)?%?\\b",
            },
            // Double quotes
            {
                className: "string",
                begin: '"',
                end: '"',
                contains: [
                    {
                        className: "constant",
                        begin: "\\$\\{",
                        end: "\\}",
                    },
                ],
            },
            // Single quotes
            {
                className: "string",
                begin: "'",
                end: "'",
            },
            // Comments
            hljs.COMMENT("//", "$"),
        ],
    };
});

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
            if (props?.className?.startsWith("language")) {
                const lang = props.className.split("-")[1];

                const codeHTML = hljs.highlight(children as string, {
                    language: lang,
                }).value;

                return (
                    <div className="@module:mdxComponents::code">
                        <code
                            dangerouslySetInnerHTML={{ __html: codeHTML }}
                            {...props}
                        />
                    </div>
                );
            }

            return (
                <span className="@module:mdxComponents::highlight">
                    {children}
                </span>
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
