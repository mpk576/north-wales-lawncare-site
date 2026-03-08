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
      <strong>Last updated:</strong> 8 March 2026
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
    <p>
      We do not use analytics or advertising cookies on this website. However,
      our infrastructure providers may process certain technical data as
      described below.
    </p>

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

    <h3>Email delivery</h3>
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

    <h3>Website infrastructure (Cloudflare)</h3>
    <p>
      This website is hosted and served via <strong>Cloudflare, Inc.</strong>, a
      network infrastructure and security provider based in the United States.
      When you visit our website, your requests are routed through
      Cloudflare&apos;s global network, which may process certain technical
      information including your IP address, browser type, and request metadata
      for the purpose of delivering the website securely and reliably.
    </p>
    <p>
      Cloudflare may set strictly necessary cookies on your device (such as{" "}
      <code>__cf_bm</code>) to support bot management and site security. These
      cookies are required for the secure operation of the website and do not
      require your consent under UK PECR. They are not used for advertising or
      tracking purposes.
    </p>
    <p>
      Cloudflare acts as a data processor on our behalf for the purpose of
      hosting and securing this website. Cloudflare is certified under the EU-US
      Data Privacy Framework, and Standard Contractual Clauses are in place to
      cover transfers of personal data to the United States. You can review
      Cloudflare&apos;s privacy practices at{" "}
      <a
        href="https://www.cloudflare.com/privacypolicy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        cloudflare.com/privacypolicy
      </a>
      .
    </p>

    <h3>Bot protection (Cloudflare Turnstile)</h3>
    <p>
      Our contact form is protected by <strong>Cloudflare Turnstile</strong>, a
      privacy-preserving bot detection service. Turnstile analyses signals from
      your browser environment (such as browser characteristics and interaction
      patterns) to distinguish human visitors from automated bots. It does not
      set tracking cookies and does not build advertising profiles.
    </p>
    <p>
      The legal basis for this processing is{" "}
      <strong>legitimate interest</strong> (Article 6(1)(f) GDPR) — preventing
      spam and abuse is a necessary and proportionate security measure. The
      signals collected by Turnstile are strictly necessary for this purpose.
      For full details of how Turnstile processes data, see Cloudflare&apos;s{" "}
      <a
        href="https://www.cloudflare.com/turnstile-privacy-policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Turnstile Privacy Addendum
      </a>
      .
    </p>

    <h2>How long we keep it</h2>
    <p>
      We retain your contact form data for no longer than{" "}
      <strong>12 months</strong> after your enquiry has been resolved, after
      which it is deleted. Resend retains email logs in accordance with their
      own data retention policy. Cloudflare retains infrastructure logs in
      accordance with their own retention policies.
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
    <p>
      Please note that for data processed directly by Cloudflare or Resend as
      independent data controllers, you may need to contact those organisations
      directly to exercise your rights in relation to that data.
    </p>

    <h2>How we protect your data</h2>
    <p>
      All data transmitted through our website is encrypted via TLS. We limit
      access to your personal data to only those who need it to respond to your
      enquiry. Website security is further supported by Cloudflare&apos;s
      network-level protection.
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
