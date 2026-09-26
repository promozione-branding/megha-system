import React from "react";
import { redirect } from "next/navigation";

import ToiletCubicle from "./ToiletCubicle";
import RestRoom from "./RestRoom";

// ============================================================
// ALLOWED CITIES
// ============================================================

const cities = [
  "Delhi",
  "New Delhi",
  "Gurugram",
  "Faridabad",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Sonipat",
  "Bahadurgarh",
  "Panipat",
  "Rohtak",
  "Rewari",
  "Hapur",
  "Meerut",
  "Baghpat",
  "Bulandshahr",
  "Muzaffarnagar",
  "Shamli",
  "Palwal",
  "Jhajjar",
  "Karnal",
  "Hisar",
  "Ambala",
  "Kurukshetra",
  "Yamunanagar",
  "Panchkula",
  "Sirsa",
  "Bhiwani",
  "Jind",
  "Kaithal",
  "Fatehabad",
  "Narnaul",
  "Mahendragarh",
  "Charkhi Dadri",
  "Nuh",
  "Dharuhera",
  "Bawal",
  "Hansi",
  "Tohana",
  "Narwana",

  // Uttar Pradesh
  "Agra",
  "Mathura",
  "Aligarh",
  "Lucknow",
  "Kanpur",
  "Bareilly",
  "Moradabad",
  "Saharanpur",
  "Firozabad",
  "Ayodhya",
  "Prayagraj",
  "Varanasi",
  "Gorakhpur",
  "Jhansi",
  "Rampur",
  "Rae Bareli",
  "Unnao",
  "Etawah",
  "Mainpuri",
  "Shahjahanpur",
  "Sitapur",
  "Lakhimpur",
  "Farrukhabad",
  "Sultanpur",
  "Mirzapur",
  "Ghazipur",
  "Jaunpur",

  // Rajasthan
  "Jaipur",
  "Alwar",
  "Bhiwadi",
  "Bharatpur",
  "Neemrana",
  "Kota",
  "Ajmer",
  "Jodhpur",
  "Udaipur",
  "Bikaner",
  "Sikar",
  "Bhilwara",
  "Sri Ganganagar",
  "Hanumangarh",
  "Chittorgarh",

  // Madhya Pradesh
  "Gwalior",
  "Morena",
  "Shivpuri",
  "Guna",
  "Bhopal",
  "Indore",
  "Ujjain",
  "Jabalpur",
  "Sagar",
  "Ratlam",
  "Dewas",
  "Rewa",
  "Satna",
  "Vidisha",
  "Mandsaur",
];

// ============================================================
// GET CITY + PAGE TYPE
// ============================================================

function getPageData(location) {
  const slug = location?.toLowerCase().trim();

  let citySlug = "";
  let type = "";

  if (slug.startsWith("toilet-cubicle-in-")) {
    citySlug = slug.replace("toilet-cubicle-in-", "");
    type = "toilet";
  } else if (slug.startsWith("restroom-cubicle-in-")) {
    citySlug = slug.replace("restroom-cubicle-in-", "");
    type = "restroom";
  } else {
    return null;
  }

  // Convert slug to city name
  const city = citySlug
    .split("-")
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  // Check city
  const cityExists = cities.some(
    (allowedCity) =>
      allowedCity.toLowerCase() === city.toLowerCase()
  );

  if (!cityExists) {
    return null;
  }

  // Use original city spelling from array
  const actualCity = cities.find(
    (allowedCity) =>
      allowedCity.toLowerCase() === city.toLowerCase()
  );

  return {
    city: actualCity,
    type,
  };
}

// ============================================================
// DYNAMIC SEO METADATA
// ============================================================

export async function generateMetadata({ params }) {
  const { location } = await params;

  const pageData = getPageData(location);

  // Invalid page
  if (!pageData) {
    return {
      title: "Page Not Found | Megha Systems",
      description:
        "The requested page could not be found on Megha Systems.",
    };
  }

  const { city, type } = pageData;

  // ==========================================================
  // TOILET CUBICLE SEO
  // ==========================================================

  if (type === "toilet") {
    return {
      title: `Toilet Cubicle in ${city} | Toilet Partition Price`,

      description: `Find durable toilet cubicles in ${city} from Megha Systems. Explore HPL toilet cubicles and partitions with custom designs, quality materials, installation, and competitive pricing.`,

     

    };
  }

  // ==========================================================
  // RESTROOM CUBICLE SEO
  // ==========================================================

  return {
    title: `Restroom Cubicle in ${city} | Restroom Partition Price`,

    description: `Looking for a restroom cubicle in ${city}? Megha Systems offers durable HPL restroom cubicles and partitions with custom designs, professional installation, and competitive pricing.`,

   
  };
}

// ============================================================
// PAGE
// ============================================================

export default async function Page({ params }) {
  const { location } = await params;

  const pageData = getPageData(location);

  // Invalid URL/city
  if (!pageData) {
    redirect("/");
  }

  const { city, type } = pageData;

  // ==========================================================
  // RENDER CORRECT PAGE
  // ==========================================================

  if (type === "toilet") {
    return <ToiletCubicle city={city} />;
  }

  return <RestRoom city={city} />;
}