"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function FilterByPrice() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const min = Number(searchParams.get("min"));
  const max = Number(searchParams.get("max"));

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minRef = useRef(min);
  const maxRef = useRef(max);
  const rangeRef = useRef<HTMLInputElement>(null);

  return (
    <section className="space-y-4">
      <header className="text-xl font-semibold">Price Range</header>

      <div className="">
        <input type="range" ref={rangeRef} className="w-full" />
      </div>
    </section>
  );
}
