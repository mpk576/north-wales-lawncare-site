import content from "@/data/content.json";
import Button from "@/components/Button/Button";
import "./Hero.scss";

const { hero } = content;

export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src={hero.image.src}
        alt={hero.image.alt}
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">{hero.headline}</h1>
        <p className="hero__subtitle">{hero.subheadline}</p>
        <div className="hero__actions">
          <Button
            label={hero.ctas[0].label}
            variant="primary"
            href={hero.ctas[0].href}
            icon={hero.ctas[0].icon}
          />
          <Button
            label={hero.ctas[1].label}
            variant="accent"
            href={hero.ctas[1].href}
            icon={hero.ctas[1].icon}
          />
        </div>
      </div>
    </section>
  );
}
