import "./CardSection.scss";
import Card from "@/components/Card/Card";

interface CardData {
  title?: string;
  body: string;
  attribution?: string;
  icon?: string;
  image?: { src: string; alt: string };
  align?: "left" | "center";
}

interface CardSectionProps {
  heading: string;
  cards: CardData[];
  id?: string;
  variant?: "default" | "alt";
}

export default function CardSection({
  heading,
  cards,
  id,
  variant = "default",
}: CardSectionProps) {
  const sectionClassName = `card-section${variant === "alt" ? " card-section--alt" : ""}`;

  return (
    <section className={sectionClassName} id={id}>
      <div className="card-section__container">
        <h2 className="card-section__heading">{heading}</h2>
        <div className="card-section__grid">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
