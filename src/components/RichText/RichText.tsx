import "./RichText.scss";

interface RichTextProps {
  heading: string;
  headingLevel?: "h2" | "h3" | "h4";
  body: string | string[];
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
  const paragraphs = Array.isArray(body) ? body : [body];
  const sectionClass =
    variant === "alt" ? "rich-text rich-text--alt" : "rich-text";

  return (
    <section className={sectionClass} id={id}>
      <div className="rich-text__container">
        <Tag className="rich-text__heading">{heading}</Tag>
        {paragraphs.map((text, index) => (
          <p className="rich-text__body" key={index}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
