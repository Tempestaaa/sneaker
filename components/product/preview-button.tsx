"use client";

import { Button } from "@/components/ui/button";
import { StoreContext } from "@/context/store-context";
import { Product } from "@/types/product";
import { EyeIcon } from "lucide-react";
import { useContext } from "react";

type Props = {
  product?: Product;
};

export default function PreviewButton({ product }: Props) {
  const { setPreview } = useContext(StoreContext);

  return (
    <Button variant="ghost" onClick={() => setPreview(product)}>
      <EyeIcon className="size-4" />
      <p>Preview</p>
    </Button>
  );
}
