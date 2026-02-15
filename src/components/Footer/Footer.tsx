import content from "@/data/content.json";
import "./Footer.scss";

const { footer } = content;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {year} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
