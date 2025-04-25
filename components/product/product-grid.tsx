import ProductCard from "@/components/product/product-card";
import sampleProducts from "@/data/product";

type Props = {
  filteredBrand?: string;
};

export default function ProduceGrid({ filteredBrand }: Props) {
  const filteredProducts = filteredBrand
    ? sampleProducts.filter(
        (item) => item.brand.toLowerCase() === filteredBrand
      )
    : sampleProducts;

  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4">
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </section>
  );
}
