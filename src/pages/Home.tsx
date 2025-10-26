import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "../compenents/SearchBar";
import Buttons from "../compenents/Buttons";
import type { Posts } from "../types/types";
import PostCard from "../compenents/PostCard";
import { useDebounce } from "../hooks/useDebounced";

const Home = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/";
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Posts[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const abortControllerRef = useRef<AbortController | null>(null);

  const navigate = useNavigate();

  // use searchParams for write and learn on URL
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("_page")) || 1;
  const limit = Number(searchParams.get("_limit")) || 10;
  const search = searchParams.get("search") || "";
  const searchTerm = searchParams.get("searchTerm") || "";
  const debounced = useDebounce(search, 500);
  const query = debounced ? `&q=${search}` : "";

  useEffect(() => {
    const fetchPosts = async () => {
      // cancle any old request that is still working
      abortControllerRef.current?.abort();

      // create new abort controller
      abortControllerRef.current = new AbortController();

      try {
        setIsLoading(true);

        const response = await fetch(
          `${baseURL}/posts?_page=${page}&_limit=${limit}${query}`,
          {
            signal: abortControllerRef.current?.signal, // link abort controller with fetch
          }
        );

        if (!response.ok) throw new Error("failed to fetch data");
        const total = response.headers.get("x-total-count");
        if (total) setTotalPages(Math.ceil(Number(total) / limit));
        const posts = (await response.json()) as Posts[];
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
  }, [page, limit, debounced]);

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  const handleShowBlog = (post: Posts) => {
    navigate(`/post/${post.id}`, {
      state: {
        post,
        page,
        limit,
      },
    });
  };


  const handleSearch = useCallback((value: string) => (
    setSearchParams({
      _page: "1",
      _limit: limit.toString(),
      search: value
    })
  ),[]);


  const filtredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.id.toString() === searchTerm
    );
  });

  return (
    <>
      <header className="">
        <h1>Posts</h1>
        <SearchBar onSearch={handleSearch} />
        <Link to="/favorites" >❤️ Favorites</Link>
      </header>

      <main>
        {isLoading && <div className="loading">is Laoding...</div>}

        {!isLoading &&
          filtredPosts.map((post) => {
            return (
              <PostCard
                key={post.id}
                {...post}
                onHandleShowBlog={handleShowBlog}
              />
            );
          })}
      </main>
      <Buttons
        page={page}
        limit={limit}
        onUseSearchParams={setSearchParams}
        totalPages={totalPages}
      />
    </>
  );
};

export default Home;
