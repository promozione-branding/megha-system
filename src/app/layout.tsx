import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navabar/page";
import FooterSection from "./components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Megha Systems | Toilet Cubicle Partition & Restroom Partition in India",
  description:
    "Explore premium toilet cubicles and washroom partition by Megha Systems, from standard and luxury cubicles to kids, urinal, wall-hung, and customized systems.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://toiletcubiclemanufacturer.com/#organization",
      name: "Toilet Cubicle Manufacturer",
      url: "https://toiletcubiclemanufacturer.com/",
    },
    {
      "@type": "WebSite",
      "@id": "https://toiletcubiclemanufacturer.com/#website",
      url: "https://toiletcubiclemanufacturer.com/",
      name: "Toilet Cubicle Manufacturer",
      publisher: {
        "@id": "https://toiletcubiclemanufacturer.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="canonical"
          href="https://toiletcubiclemanufacturer.com/"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
         {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ylmkevm6z3");
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
                <Navbar />
{children}         <FooterSection />
</body>
    </html>
  );
}