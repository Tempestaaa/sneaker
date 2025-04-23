import StoreFilter from "@/components/store/store-filter";
import StorePreview from "@/components/store/store-preview";
import StoreProducts from "@/components/store/store-products";

export default function StorePage() {
  return (
    <section className="flex gap-8">
      <StoreFilter />
      <StoreProducts />
      <StorePreview />
    </section>
  );
}
