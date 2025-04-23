import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, User2Icon } from "lucide-react";

export default function NavbarUser() {
  return (
    <section className="flex-center gap-4">
      <Button variant="ghost" size="icon">
        <ShoppingCartIcon />
      </Button>

      <Button size="icon">
        <User2Icon />
      </Button>
    </section>
  );
}
