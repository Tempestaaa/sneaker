"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ClearFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const removeSearchParams = () => replace(pathname, { scroll: false });

  return (
    <>
      {searchParams.size > 0 && (
        <Button onClick={removeSearchParams}>Clear</Button>
      )}
    </>
  );
}
