import ClearFilter from "@/components/store/clear-filter";
import FilterByBrand from "@/components/store/filter-by-brand";
import FilterByPrice from "@/components/store/filter-by-price";
import FilterBySize from "@/components/store/filter-by-size";

export default function StoreFilter() {
  return (
    <aside className="w-60 flex flex-col gap-4">
      <ClearFilter />
      <FilterByBrand />
      <FilterByPrice />
      <FilterBySize />
    </aside>
  );
}
