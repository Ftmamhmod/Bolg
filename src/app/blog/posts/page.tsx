
import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import Link from 'next/link';


export default function Page() {
  return (
    <>

      <h1 className="text-purple-800">Posts</h1>

      {posts.map((post) => (
        <Link key={post.id} href={`./../post/${post.id}`}>
          <Post {...post} />
        </Link>
      ))}
    </>)
}