"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import FooterSection from "./Footer/page";
import Navbar from "./Navabar/page";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showSiteChrome = pathname !== "/inquiry";

  return (
    <>
      {showSiteChrome && <Navbar />}
      {children}
      {showSiteChrome && <FooterSection />}
    </>
  );
}
