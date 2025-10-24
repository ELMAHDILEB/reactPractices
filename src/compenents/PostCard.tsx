import type { FC } from "react"
import type { PostCardProps } from "../types/types"
import { useFavorites } from "../context/FavoritesContext"


const PostCard: FC<PostCardProps> = ({id, title, body, onHandleShowBlog}) => {
    const { favorites, dispatch } = useFavorites();
    const isFavorite = favorites.some((fav)=> fav.id === id);

  return (
    <article key={id}>
    <h1>Blog ID: {id}</h1>
    <button onClick={() => onHandleShowBlog({id, title, body})}>
      Show Detail
    </button>
    <button
        onClick={()=> 
            isFavorite ? dispatch({type: 'REMOVE_FAVORITE', payload: id}) : dispatch({type: "ADD_FAVORITE", payload: {id, title, body}})
        }
    >
          {isFavorite ? "💔 Remove" : "❤️ Favorite"}
    </button>
  </article>
  )
}

export default PostCard
