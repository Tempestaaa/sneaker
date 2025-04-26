"use client";

import { ChevronDownIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SortSelect() {
  const [isExpand, setIsExpand] = useState(false);
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

  const sortBy = sorts.find(
    ({ name, value }) =>
      searchParams.get("sortBy") && searchParams.get("sortBy") === value
  );

  const handleSort = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) params.set("sortBy", term);
    else params.delete("sortBy");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      onMouseLeave={() => setIsExpand(false)}
      className="h-10 w-60 border-2 px-4 relative"
    >
      <div
        className="h-full flex-center gap-4 justify-between cursor-pointer"
        onClick={() => setIsExpand(!isExpand)}
      >
        <p>Sort by{sortBy && <span>: {sortBy.name}</span>}</p>
        <ChevronDownIcon className={`size-4 ${isExpand && "rotate-180"}`} />
      </div>

      {isExpand && (
        <ul
          role="list"
          className="absolute $ left-0 w-full z-10 bg-background p-2 shadow"
        >
          {sorts.map(({ name, value }) => (
            <li
              key={value}
              onClick={() => {
                handleSort(value);
                setIsExpand(false);
              }}
              className="p-1 hover:bg-foreground hover:text-background cursor-pointer"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
