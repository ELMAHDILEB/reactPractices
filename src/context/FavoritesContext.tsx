import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import type { FavoritesContextType } from "../types/types";
import { FavoritesReducer } from "./FavoritesReducer";

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(FavoritesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        dispatch,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context)
    throw new Error("useFavorites must be used inside FavoritesProvider");

  return context;
};
