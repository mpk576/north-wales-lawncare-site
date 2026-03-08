import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "North Wales Lawn Care",
  description:
    "Professional lawn care and garden maintenance across North Wales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
