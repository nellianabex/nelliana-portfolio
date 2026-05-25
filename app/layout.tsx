import type { Metadata } from "next";
import { Bebas_Neue, Inter, Caveat, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
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
    default: "Nelliana BEX — Direction Artistique & Communication",
    template: "%s | Nelliana BEX",
  },
  description:
    "Portfolio de Nelliana BEX — Directrice artistique digitale, manager d'artistes, photographe et chargée de communication. Disponible pour de nouveaux projets.",
  keywords: [
    "direction artistique",
    "communication",
    "photographie",
    "management artistes",
    "webdesign",
    "branding",
    "graphisme",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Nelliana BEX",
    title: "Nelliana BEX — Direction Artistique & Communication",
    description:
      "Portfolio de Nelliana BEX — Directrice artistique digitale, manager d'artistes, photographe.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelliana BEX",
    description:
      "Portfolio de Nelliana BEX — Direction Artistique & Communication",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable} ${caveat.variable} ${dmMono.variable}`}>
      <body className="antialiased bg-noir text-blanc-casse">
        <SmoothScroll>
          <CustomCursor />
          {/* Banner management */}
          <div className="w-full bg-fluo text-noir text-center py-2 px-4 font-body text-[10px] sm:text-xs font-semibold tracking-wide z-[60] relative leading-snug">
            Management d&apos;artistes : complet pour le moment. Autres collaborations bienvenues.
          </div>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
