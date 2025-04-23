import { SearchIcon } from "lucide-react";

export default function NavbarSearch() {
  return (
    <section className="flex-1 grid-center h-10">
      <form className="flex-center gap-4 w-60 has-[:focus]:w-100 h-full border-2 px-4 has-[:focus]:border-foreground">
        <input placeholder="Search..." className="outline-0 flex-1" />

        <button type="submit">
          <SearchIcon className="size-4" />
        </button>
      </form>
    </section>
  );
}
