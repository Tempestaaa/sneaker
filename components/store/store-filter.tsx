import FilterByBrand from "@/components/store/filter-by-brand";
import FilterByPrice from "@/components/store/filter-by-price";
import FilterBySize from "@/components/store/filter-by-size";

export default function StoreFilter() {
  return (
    <aside className="w-72 space-y-4">
      <FilterByBrand />
      <FilterByPrice />
      <FilterBySize />
    </aside>
  );
}
