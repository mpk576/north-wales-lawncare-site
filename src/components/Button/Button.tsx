import Icon from "@/components/Icon/Icon";
import "./Button.scss";

interface ButtonBaseProps {
  label: string;
  variant: "primary" | "accent";
  icon?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  onClick: () => void;
  href?: never;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  label,
  variant,
  icon,
  href,
  onClick,
}: ButtonProps) {
  const className = `button button--${variant}`;

  const children = (
    <>
      {label}
      {icon && (
        <span className="button__icon">
          <Icon type={icon} size="2rem" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
