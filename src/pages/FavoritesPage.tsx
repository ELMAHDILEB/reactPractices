import { useFavorites } from "../context/FavoritesContext";
const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length <= 0) return <h2>No Favorite Posts ⭐</h2>;
  return (
    <>
      <section>
        {favorites.map(({ id, title, body }) => {
          return (
            <article key={id}>
              <h1>{id}</h1>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default FavoritesPage;
