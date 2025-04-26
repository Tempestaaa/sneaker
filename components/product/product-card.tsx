import PreviewButton from "@/components/product/preview-button";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Product } from "@/types/product";
import { MinusIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { images, name, brand, price, colors } = product;
  const image = images[0];

  return (
    <div className="size-full flex flex-col gap-2 group">
      <Link href="/store/1">
        <div className="w-full h-80 relative bg-foreground/60">
          <Image src="/test.png" alt={image.alt} fill priority />
        </div>
      </Link>

      <section className="flex flex-col">
        <Link href="/store/1">
          <header className="font-semibold group-hover:underline underline-offset-2">
            {name}
          </header>
        </Link>

        <div className="flex-center gap-2">
          <p className="text-foreground/60">{brand}</p>
          <MinusIcon className="size-2" />
          <p className="text-foreground/60">{colors.length} colors</p>
        </div>

        <div className="flex-center gap-4 justify-between font-medium">
          <p className="text-xl">{formatCurrency(price, "VND")}</p>
          <div className="flex-center gap-2">
            <PreviewButton product={product} />

            <Button variant="ghost">
              <ShoppingCartIcon className="size-4" />
              <p>Cart</p>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
