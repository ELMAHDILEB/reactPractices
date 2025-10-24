import type { FavoritesAction, FavoritesState } from "../types/types";

export const FavoritesReducer =  (
    state: FavoritesState,
    action:FavoritesAction
): FavoritesState =>{
    switch(action.type){
        case "ADD_FAVORITE":
             return {
                favorites: [...state.favorites, action.payload]
             }
      
        case "REMOVE_FAVORITE":
           return {
            favorites: state.favorites.filter((favorite)=> favorite.id !== action.payload)
           }
        default:
            return state
    }
}