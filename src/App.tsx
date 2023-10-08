import supabase from "../lib/supabase-client";
import { PostType } from "../types/collection";
import { useCallback, useEffect, useState } from "react";
import Post from "./components/post";
import "./App.css";

export default function App() {
  const [posts, setPost] = useState<PostType[]>([]);
  const fetcher = useCallback(async () => {
    const { data, error } = await supabase.from("posts").select("*");
    if (error) {
      console.log("Error: ", error);
    } else {
      setPost(data);
    }
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <>
      <h1>Hello Posts</h1>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
