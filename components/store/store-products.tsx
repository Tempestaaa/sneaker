import ProduceGrid from "@/components/product/product-grid";
import StoreProductHeading from "@/components/store/store-product-heading";

type Props = {
  filteredBrand?: string;
};

export default function StoreProducts({ filteredBrand }: Props) {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <StoreProductHeading header={filteredBrand} />
      <ProduceGrid filteredBrand={filteredBrand} />
    </div>
  );
}
