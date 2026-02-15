import "./Card.scss";
import Icon from "@/components/Icon/Icon";

interface CardProps {
  title?: string;
  body: string;
  attribution?: string;
  icon?: string;
  image?: string;
  align?: "left" | "center";
}

export default function Card({
  title,
  body,
  attribution,
  icon,
  image,
  align = "left",
}: CardProps) {
  const className = `card${align === "center" ? " card--center" : ""}`;

  return (
    <div className={className}>
      {(icon || image) && (
        <div className={`card__media${icon ? " card__media--icon" : ""}`}>
          {icon && <Icon type={icon} fill="#FFFFFF" size="6rem" />}
          {image && <img className="card__image" src={image} alt="" />}
        </div>
      )}
      <div className="card__content">
        {title && <h4 className="card__title">{title}</h4>}
        <p className="card__body">{body}</p>
        {attribution && <p className="card__attribution">{attribution}</p>}
      </div>
    </div>
  );
}
