"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const links: { name: string; href: string }[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Store",
      href: "/store",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <menu className="flex-center">
      {links.map(({ name, href }) => (
        <Link
          key={href}
          href={href}
          className={`px-4 h-10 grid-center border-b-2 border-transparent hover:border-foreground ${
            isActive(href) && "!border-foreground font-medium"
          }`}
        >
          {name}
        </Link>
      ))}
    </menu>
  );
}
