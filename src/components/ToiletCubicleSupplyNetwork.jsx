import Link from "next/link";
import { toiletCubicleCities } from "@/CityData";
import { restroomCities } from "@/CityData";

export default function ToiletCubicleSupplyNetwork() {
  return (
    <section className="w-full bg-[#f5f7fa] py-6 md:py-13">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#1f306d]">
            Our Supply Network
          </span>

          <h2 className="text-3xl font-bold leading-tight text-[#1f1f1f] sm:text-4xl ">
            Toilet Cubicle Supply Network
          </h2>

          
        </div>

        {/* Cities */}
        <div className="w-full">
  <div className="flex flex-wrap items-center justify-center gap-y-2 text-sm font-medium text-gray-600">
    {toiletCubicleCities.map((city, index) => (
      <div key={`${city.href}-${index}`}>
        <Link
          href={city.href}
          className="transition-colors duration-200 hover:text-[#1f306d]"
        >
          {city.label}
        </Link>

        {index !== toiletCubicleCities.length - 1 && (
          <span className="mx-2 text-gray-400">|</span>
        )}
      </div>
    ))}
  </div>
</div>


 <div className="mx-auto mt-6 mb-5 max-w-3xl text-center">
        

          <h2 className="text-3xl font-bold leading-tight text-[#1f1f1f] sm:text-4xl ">
            Restroom Cubicle Supply Network
          </h2>

          
        </div>

        {/* Cities */}
        <div className="w-full">
  <div className="flex flex-wrap items-center justify-center gap-y-2 text-sm font-medium text-gray-600">
    {restroomCities.map((city, index) => (
      <div key={`${city.href}-${index}`}>
        <Link
          href={city.href}
          className="transition-colors duration-200 hover:text-[#1f306d]"
        >
          {city.label}
        </Link>

        {index !== restroomCities.length - 1 && (
          <span className="mx-2 text-gray-400">|</span>
        )}
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}