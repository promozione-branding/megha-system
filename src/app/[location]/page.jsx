import React from "react";
import { redirect } from "next/navigation";

import ToiletCubicle from "./ToiletCubicle";
import RestRoom from "./RestRoom";

export default async function Page({ params }) {
  const { location } = await params;

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
  // NORMALIZE URL
  // ============================================================

  const slug = location?.toLowerCase().trim();

  // ============================================================
  // DETERMINE PAGE TYPE
  // ============================================================

  let citySlug = "";
  let PageComponent = null;

  // Toilet Cubicle
  if (slug.startsWith("toilet-cubicle-in-")) {
    citySlug = slug.replace("toilet-cubicle-in-", "");
    PageComponent = ToiletCubicle;
  }

  // Restroom Cubicle
  else if (slug.startsWith("restroom-cubicle-in-")) {
    citySlug = slug.replace("restroom-cubicle-in-", "");
    PageComponent = RestRoom;
  }

  // Invalid URL pattern
  else {
    redirect("/");
  }

  // ============================================================
  // CONVERT CITY SLUG TO CITY NAME
  // ============================================================

  // Example:
  // new-delhi     -> New Delhi
  // greater-noida -> Greater Noida
  // charkhi-dadri -> Charkhi Dadri

  const city = citySlug
    .split("-")
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  // ============================================================
  // CHECK WHETHER CITY EXISTS
  // ============================================================

  const cityExists = cities.some(
    (allowedCity) =>
      allowedCity.toLowerCase() === city.toLowerCase()
  );

  // ============================================================
  // INVALID CITY → HOME PAGE
  // ============================================================

  if (!cityExists) {
    redirect("/");
  }

  // ============================================================
  // VALID CITY → RENDER CORRECT PAGE
  // ============================================================

  return <PageComponent city={city} />;
}