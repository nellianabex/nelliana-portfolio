import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollReveal from "@/components/ui/ScrollReveal";

const playfairDisplay = Playfair_Display({
  weight: ["700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nellianabex.fr"),
  title: {
    default: "Nelliana BEX | Graphiste rap et Manager d'artistes freelance",
    template: "%s | Nelliana BEX",
  },
  description:
    "Nelliana BEX, directrice artistique freelance spécialisée musique et rap. Graphisme, direction artistique, photographie, communication et management d'artistes. Disponible pour vos projets.",
  keywords: [
    "directrice artistique freelance",
    "graphiste rap",
    "direction artistique musique",
    "graphiste freelance Paris",
    "direction artistique rap",
    "manager artiste musique",
    "photographe artiste",
    "graphisme pochette album",
    "communication artiste rap",
    "branding musique",
    "infographie réseaux sociaux artiste",
    "webdesign portfolio créatif",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Nelliana BEX",
    title: "Nelliana BEX | Graphiste rap et Manager d'artistes freelance",
    description:
      "Directrice artistique freelance spécialisée musique et rap. Graphisme, photographie, communication, management d'artistes.",
    images: [{ url: "/nelliana-og.jpg", width: 1200, height: 630, alt: "Nelliana BEX — Graphiste rap et Manager d'artistes freelance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelliana BEX | Graphiste rap et Manager d'artistes freelance",
    description:
      "Directrice artistique freelance spécialisée musique et rap. Graphisme, photographie, communication.",
    images: ["/nelliana-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nellianabex.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${playfairDisplay.variable} ${inter.variable} ${caveat.variable} ${dmMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased bg-blanc-casse text-noir">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nelliana BEX",
              url: "https://nellianabex.fr",
              image: "https://nellianabex.fr/nelliana-portrait.png",
              jobTitle: "Directrice artistique freelance & Graphiste",
              description:
                "Directrice artistique freelance spécialisée musique et rap. Graphisme, photographie, communication, management d'artistes.",
              knowsAbout: [
                "Direction artistique",
                "Graphisme",
                "Photographie",
                "Communication",
                "Management d'artistes",
                "Branding musique",
                "Rap et culture urbaine",
              ],
              sameAs: [
                "https://www.behance.net/anaillendesign",
                "https://www.instagram.com/n3lliana",
              ],
              makesOffer: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Direction artistique" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphisme et communication" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photographie" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Management d'artistes" } },
              ],
            }),
          }}
        />
        <SmoothScroll>
          <CustomCursor />
          <ScrollReveal />
          {/* Banner management */}
          <div className="fixed top-0 left-0 right-0 w-full bg-fluo text-noir text-center py-2 px-4 font-body text-[10px] sm:text-xs font-semibold tracking-wide z-[70] leading-snug">
            Management d&apos;artistes : complet pour le moment. Autres collaborations bienvenues.
          </div>
          {/* Spacer pour compenser le bandeau fixed */}
          <div className="h-8" />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
