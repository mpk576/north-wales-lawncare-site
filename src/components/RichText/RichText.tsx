import "./RichText.scss";

interface RichTextProps {
  heading: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4";
  body: string | string[] | React.ReactNode;
  id?: string;
  variant?: "default" | "alt";
}

export default function RichText({
  heading,
  headingLevel = "h2",
  body,
  id,
  variant = "default",
}: RichTextProps) {
  const Tag = headingLevel;
  const sectionClass =
    variant === "alt" ? "rich-text rich-text--alt" : "rich-text";

  const isNode = !Array.isArray(body) && typeof body !== "string";
  const paragraphs = isNode ? [] : Array.isArray(body) ? body : [body];

  return (
    <section className={sectionClass} id={id}>
      <div className="rich-text__container">
        <Tag className={`rich-text__heading rich-text__heading--${headingLevel}`}>
          {heading}
        </Tag>
        {isNode ? (
          <div className="rich-text__prose">{body as React.ReactNode}</div>
        ) : (
          paragraphs.map((text, index) => (
            <p className="rich-text__body" key={index}>
              {text}
            </p>
          ))
        )}
      </div>
    </section>
  );
}
