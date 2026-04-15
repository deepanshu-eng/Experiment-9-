import { useEffect, useState } from "react";
import { getPosts } from "../services/fakeDB";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">All Posts</h1>
      {posts.map((post, i) => (
        <div key={i} className="bg-white p-4 mb-4 shadow rounded">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/post/${i}`} className="text-blue-500">
            View
          </Link>
        </div>
      ))}
    </div>
  );
}