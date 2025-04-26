"use client";

import { Product } from "@/types/product";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type storeContextType = {
  preview: Product | undefined;
  setPreview: Dispatch<SetStateAction<Product | undefined>>;
};

export const StoreContext = createContext<storeContextType>({
  preview: undefined,
  setPreview: () => {},
});

export const StoreContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [preview, setPreview] = useState<Product>();

  return (
    <StoreContext.Provider value={{ preview, setPreview }}>
      {children}
    </StoreContext.Provider>
  );
};
