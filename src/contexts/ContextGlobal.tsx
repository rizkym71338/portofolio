import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { LayoutLoading } from "../layouts";

export type TypeContextGlobal = {};

const ContextGlobal = createContext<TypeContextGlobal>({});

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};

export const ProviderGlobal = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {};
  }, []);

  const value: TypeContextGlobal = {};

  return (
    <ContextGlobal.Provider value={value}>
      {isLoading ? <LayoutLoading /> : children}
    </ContextGlobal.Provider>
  );
};
