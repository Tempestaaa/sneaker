import SortSelect from "@/components/store/sort-select";

type Props = {
  header?: string;
};

export default function StoreProductHeading({ header }: Props) {
  return (
    <section className="flex-center gap-4 justify-between">
      <header className="text-2xl font-bold capitalize">
        {header ? header.split("-").join(" ") : "All products"}
      </header>

      <SortSelect />
    </section>
  );
}
