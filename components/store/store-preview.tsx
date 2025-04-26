"use client";

import { StoreContext } from "@/context/store-context";
import { useContext } from "react";

export default function StorePreview() {
  const { preview } = useContext(StoreContext);

  return (
    <aside
      className={`overflow-hidden transition-[width] ${
        preview ? "w-90" : "w-0"
      }`}
    >
      StorePreview
    </aside>
  );
}
