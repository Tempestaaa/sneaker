"use client";

import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function StoreProductHeading() {
  const sorts: { name: string; value: string }[] = [
    {
      name: "Newest",
      value: "newest",
    },
    {
      name: "Popularity",
      value: "popularity",
    },
    {
      name: "Rating",
      value: "rating",
    },
    {
      name: "Price: High-Low",
      value: "price_desc",
    },
    {
      name: "Price: Low-High",
      value: "price_asc",
    },
  ];

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const header =
    searchParams.get("brand")?.split("-").join(" ") || "All products";

  const handleSort = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) params.set("sortBy", term);
    else params.delete("sortBy");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="flex-center gap-4 justify-between">
      <header className="text-2xl font-bold capitalize">{header}</header>

      <div className="flex-center gap-4">
        <Select>
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>

          <SelectContent>
            {sorts.map(({ name, value }) => (
              <SelectItem
                key={value}
                value={value}
                onClick={() => handleSort(value)}
              >
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
