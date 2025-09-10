import { useEffect, useRef, useState } from "react";
import { useSearchParams  } from "react-router-dom";

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
  // const [page, setPage] = useState<number>(1); // number of page
  const [totalPages, setTotalPages] = useState<number>(0); 
  // const [limit] = useState<number>(10); // limit page visible
  const abortControllerRef = useRef<AbortController | null>(null);

  // use searchParams for write and learn on URL
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("_page")) || 1;
  const limit = Number(searchParams.get("_limit")) || 10;

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
        const total = response.headers.get("x-total-count");
        if(total) setTotalPages(Math.ceil(Number(total) / limit))
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
  }, [page, limit]);

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Data Fetching</h1>
      <div>
        <button
          onClick={() => setSearchParams({ _page: String(Math.max(page - 1, 1)),  _limit: String(limit)})
        }
          disabled={page === 1}
        >
          Prev
        </button>
        <span>Page: {page} / {totalPages}</span>
        <button
          onClick={() => setSearchParams({_page: String(page + 1), _limit: String(limit)})}
          disabled={page === totalPages}
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
