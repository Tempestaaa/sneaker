"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterBySize() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const size = searchParams.get("size");

  const handleSizeQuery = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) params.set("size", term);
    else params.delete("size");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="space-y-4">
      <header className="text-xl font-semibold">Size</header>

      <ul className="grid grid-cols-4 gap-2">
        {[...Array(10)].map((_, id) => {
          const isActive = size === (id + 40).toString();

          return (
            <li
              key={id}
              onClick={() => handleSizeQuery((id + 40).toString())}
              className={`grid-center py-2 border-2 border-foreground hover:bg-foreground hover:text-background cursor-pointer ${
                isActive && "bg-foreground text-background"
              }`}
            >
              {id + 40}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
