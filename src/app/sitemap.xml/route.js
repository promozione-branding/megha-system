import {
  
  toiletCubicleCities,
  restroomCities,
} from "@/CityData";
import { allProducts } from "./../../data";


const BASE_URL = "https://toiletcubiclemanufacturer.com";

export async function GET() {
  // ============================================================
  // STATIC ROUTES
  // ============================================================

  const staticRoutes = [
    "/",
    "/products",
    "/about-us",
    "/contact-us",
    "/projects",
    "/our-articles",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }));

  // ============================================================
  // PRODUCT PAGES
  // ============================================================

  const productUrls = allProducts.flatMap((category) =>
    category.products.map((product) => ({
      url: `${BASE_URL}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  // ============================================================
  // TOILET CUBICLE CITY PAGES
  // ============================================================

  const toiletCubicleCityUrls = toiletCubicleCities.map((city) => ({
    url: `${BASE_URL}${city.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ============================================================
  // RESTROOM CUBICLE CITY PAGES
  // ============================================================

  const restroomCityUrls = restroomCities.map((city) => ({
    url: `${BASE_URL}${city.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ============================================================
  // ALL URLS
  // ============================================================

  const urls = [
    ...staticUrls,
    ...productUrls,
    ...toiletCubicleCityUrls,
    ...restroomCityUrls,
  ];

  // ============================================================
  // GENERATE XML
  // ============================================================

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}