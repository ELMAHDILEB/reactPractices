import { useEffect, useRef, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/";
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1); // number of page
  const [limit] = useState<number>(10); // limit page visible
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      // cancle any old request that is still working
      abortControllerRef.current?.abort();

      // create new abort controller
      abortControllerRef.current = new AbortController();

      try {
        setIsLoading(true);

        const response = await fetch(
          `${baseURL}/posts?_page=${page}&_limit=${limit}`,
          {
            signal: abortControllerRef.current?.signal, // link abort controller with fetch
          }
        );

        if (!response.ok) throw new Error("failed to fetch data");
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError((err as Error).message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
    return () => abortControllerRef.current?.abort();
  }, [page]);

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Data Fetching</h1>
      <div>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>Page: {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={page === posts.length}
        >
          Next
        </button>
      </div>

      {isLoading && <div>isLoading....</div>}
      {!isLoading && (
        <section>
          {posts.map(({ id, title, body }: Post) => {
            return (
              <article key={id}>
                <h1>
                  {id}- {title}
                </h1>
                <p>{body}</p>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default App;
