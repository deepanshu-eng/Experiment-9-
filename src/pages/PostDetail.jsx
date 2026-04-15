import { useParams } from "react-router-dom";
import { useState } from "react";
import { getPosts, savePosts } from "../services/fakeDB";

export default function PostDetail() {
  const { id } = useParams();
  const posts = getPosts();
  const post = posts[id];

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const addComment = () => {
    const updated = [...comments, comment];
    posts[id].comments = updated;
    savePosts(posts);
    setComments(updated);
    setComment("");
  };

  return (
    <div>
      <h1 className="text-2xl">{post.title}</h1>
      <p>{post.content}</p>

      <h2 className="mt-4">Comments</h2>

      {comments.map((c, i) => (
        <p key={i} className="bg-gray-100 p-2 my-2">{c}</p>
      ))}

      <input
        className="border p-2 w-full mt-2"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addComment} className="bg-green-500 text-white px-4 py-2 mt-2">
        Add Comment
      </button>
    </div>
  );
}