import "./globals.css";
import { Space_Grotesk, Sora } from "next/font/google";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const SITE_URL = "https://deepak.dev"; // ← update to your real domain when you deploy

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Deepak — AI & Full-Stack Engineer",
    template: "%s · Deepak",
  },
  description:
    "AI-focused full-stack engineer building web products, intelligent automation, and interactive experiences people remember. Available for freelance & full-time.",
  keywords: [
    "Deepak",
    "AI Engineer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Automation",
    "Creative Developer",
    "Portfolio",
  ],
  authors: [{ name: "Deepak" }],
  creator: "Deepak",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Deepak — AI & Full-Stack Engineer",
    description:
      "Building web products, AI automation, and interactive experiences people remember. Available for freelance & full-time.",
    siteName: "Deepak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak — AI & Full-Stack Engineer",
    description:
      "Building web products, AI automation, and interactive experiences people remember.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Deepak",
  url: SITE_URL,
  email: "mailto:deepakvutla9@gmail.com",
  jobTitle: "AI & Full-Stack Engineer",
  description:
    "AI-focused full-stack engineer building web products, intelligent automation, and interactive experiences.",
  knowsAbout: [
    "Artificial Intelligence",
    "Web Development",
    "React",
    "Next.js",
    "Automation",
    "Interaction Design",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
