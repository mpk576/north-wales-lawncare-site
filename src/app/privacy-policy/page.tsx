import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import RichText from "@/components/RichText/RichText";

export const metadata: Metadata = {
  title: "Privacy Policy | North Wales Lawn Care",
  description: "Privacy policy for North Wales Lawn Care.",
};

const body = (
  <>
    <p>
      <strong>Last updated:</strong> 3 March 2026
    </p>

    <h2>Who we are</h2>
    <p>
      North Wales Lawn Care operates this website. This privacy policy explains
      how we collect, use, and protect your personal data when you use our
      website and contact form.
    </p>

    <h2>What data we collect</h2>
    <p>
      When you submit our contact form, we collect the following information:
    </p>
    <ul>
      <li>Your name</li>
      <li>Your email address</li>
      <li>Your phone number (if provided)</li>
      <li>Your message content</li>
    </ul>
    <p>We do not use cookies, tracking scripts, or analytics on this website.</p>

    <h2>Why we collect it</h2>
    <p>
      We collect your data solely to respond to your enquiry. The legal basis
      for processing your data is <strong>legitimate interest</strong> (Article
      6(1)(f) GDPR) — you have contacted us and reasonably expect a reply.
    </p>
    <p>
      We will never use your email address for marketing, newsletters, or any
      purpose other than responding to your enquiry unless you explicitly
      consent to this.
    </p>

    <h2>How we process it</h2>
    <p>
      Emails are sent using <strong>Resend</strong> (Resend, Inc.), a
      third-party email service provider based in the United States. Resend acts
      as a data processor on our behalf.
    </p>
    <p>
      Resend is GDPR compliant and certified under the EU-US Data Privacy
      Framework. Standard Contractual Clauses are in place to safeguard data
      transferred from the EU/EEA to the US. You can review Resend&apos;s
      security and compliance information at{" "}
      <a
        href="https://resend.com/security"
        target="_blank"
        rel="noopener noreferrer"
      >
        resend.com/security
      </a>
      .
    </p>

    <h2>How long we keep it</h2>
    <p>
      We retain your contact form data for no longer than{" "}
      <strong>12 months</strong> after your enquiry has been resolved, after
      which it is deleted. Resend retains email logs in accordance with their
      own data retention policy.
    </p>

    <h2>Your rights</h2>
    <p>Under GDPR, you have the right to:</p>
    <ul>
      <li>
        <strong>Access</strong> the personal data we hold about you
      </li>
      <li>
        <strong>Rectify</strong> any inaccurate data
      </li>
      <li>
        <strong>Delete</strong> your data (right to be forgotten)
      </li>
      <li>
        <strong>Restrict</strong> processing of your data
      </li>
      <li>
        <strong>Object</strong> to processing of your data
      </li>
      <li>
        <strong>Data portability</strong> — receive your data in a structured
        format
      </li>
    </ul>
    <p>
      To exercise any of these rights, contact us at{" "}
      <a href="mailto:nwlawncarecy@gmail.com">nwlawncarecy@gmail.com</a>. We
      will respond to your request within 30 days.
    </p>

    <h2>How we protect your data</h2>
    <p>
      All data transmitted through our website is encrypted via TLS. We limit
      access to your personal data to only those who need it to respond to your
      enquiry.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      We may update this privacy policy from time to time. Any changes will be
      posted on this page with an updated revision date.
    </p>

    <h2>Contact</h2>
    <p>
      If you have any questions about this privacy policy or how we handle your
      data, please contact us at{" "}
      <a href="mailto:nwlawncarecy@gmail.com">nwlawncarecy@gmail.com</a>.
    </p>
    <p>
      If you are not satisfied with our response, you have the right to lodge a
      complaint with your local data protection authority. In the UK, this is
      the{" "}
      <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
        Information Commissioner&apos;s Office (ICO)
      </a>
      .
    </p>
  </>
);

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main>
        <RichText
          heading="Privacy Policy"
          headingLevel="h1"
          body={body}
          variant="alt"
        />
      </main>
      <Footer />
    </>
  );
}
