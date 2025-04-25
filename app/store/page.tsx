import StoreFilter from "@/components/store/store-filter";
import StorePreview from "@/components/store/store-preview";
import StoreProducts from "@/components/store/store-products";

type Props = {
  searchParams: Promise<{ brand: string }>;
};

export default async function StorePage({ searchParams }: Props) {
  let { brand } = await searchParams;
  brand = brand?.split("-").join(" ");

  return (
    <section className="flex gap-12">
      <StoreFilter />
      <StoreProducts filteredBrand={brand} />
      <StorePreview />
    </section>
  );
}
