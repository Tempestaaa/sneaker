"use client";

import { BRANDS } from "@/types/brand";
import { ChevronsDownIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterByBrand() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const brand = searchParams.get("brand")?.split("-").join(" ");

  const handleBrandQuery = (brand: string) => {
    const params = new URLSearchParams(searchParams);
    brand = brand.toLowerCase().split(" ").join("-");

    if (brand) params.set("brand", brand);
    else params.delete("brand");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="space-y-4">
      <header className="text-xl font-semibold">Brand</header>

      <div className="flex flex-col gap-2">
        <input type="radio" id="show-more" hidden className="peer" />

        <ul
          role="list"
          className="max-h-40 overflow-hidden peer-checked:max-h-fit"
        >
          {BRANDS.map((item) => {
            const isActive = item.toLowerCase() === brand;

            return (
              <li
                key={item}
                onClick={() => handleBrandQuery(item)}
                className={`flex-center hover:text-background hover:bg-foreground px-2 py-1 cursor-pointer ${
                  isActive && "text-background bg-foreground"
                }`}
              >
                <div
                  className={`w-0 bg-foreground h-0.5 mr-1 ${
                    isActive && "w-8 !bg-background"
                  }`}
                />

                <p>{item}</p>
              </li>
            );
          })}
        </ul>

        <label
          htmlFor="show-more"
          className="peer-checked:hidden flex-center gap-1 mx-auto cursor-pointer grid-center size-8 rounded-full hover:bg-foreground hover:text-background"
        >
          <ChevronsDownIcon className="size-4" />
        </label>
      </div>
    </section>
  );
}
