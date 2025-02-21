import Link from "next/link";
import { posts } from "./../../lib/placeholder-data";

export default function Component({
  id,
  title,
  content,
  date,
}: {
  id: string;
  title: string;
  content: string;
  date: string;
}) {
  return (
    <>
    <h1 className="text-purple-800">
      Posts
    </h1>
      {posts.map((post) => (
        <div key={post.id} className="border border-gray-200 p-4 my-4">
          <Link href={`/blog/post/${post.id}`}>
          <h2>{post.title}</h2>
          </Link>

          <p className="text-gray-500">{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}
