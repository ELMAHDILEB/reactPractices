export type ButtonProps = {
  page: number;
  limit: number;
  totalPages: number;
  onUseSearchParams: (params: { _page: string; _limit: string }) => void;
};

export interface Posts {
  id: number;
  title: string;
  body: string;
}

export interface PostCardProps extends Posts {
  onHandleShowBlog: (post: Posts)=>void
}

export type FavoritesState = {
  favorites: Posts[];
};

export type FavoritesAction =
  | { type: "ADD_FAVORITE"; payload: Posts }
  | { type: "REMOVE_FAVORITE"; payload: number };

export interface FavoritesContextType {
  favorites: Posts[];
  dispatch: React.Dispatch<FavoritesAction>;
}

export interface SearchBarProps {
  onSearch: (term: string)=> void
}


