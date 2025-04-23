import NavbarMenu from "@/components/layout/navbar-menu";
import NavbarSearch from "@/components/layout/navbar-search";
import NavbarUser from "@/components/layout/navbar-user";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <Sheet>
      <nav className="h-16 flex-center justify-between px-4 border-b-2">
        <header className="flex-center gap-8">
          <SheetTrigger asChild hidden>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <Link href="/" className="text-2xl font-bold">
            Sneakit!
          </Link>

          <NavbarMenu />
        </header>

        <section className="flex-center gap-8">
          <NavbarSearch />
          <NavbarUser />
        </section>
      </nav>
    </Sheet>
  );
}
