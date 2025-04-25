"use client";

import { createContext, useState } from "react";

type storeContextType = {};

export const storeContext = createContext<storeContextType>({});

export const StoreContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [preview, setPreview] = useState(null);

  return <storeContext.Provider value={{}}>{children}</storeContext.Provider>;
};
