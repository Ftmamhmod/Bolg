import { posts } from "./../../../lib/placeholder-data";
import Post from  "../../../ui/components/posts/Post"
export default function Page ({params}:{params:{id:string}}) {
    const post = posts.find((post)=> post.id === params.id)
    if (!post) {
        return <div>Post not found</div>
    }
  return (
    <>
<h1 className="text-purple-800">Post</h1>
<Post {...post} />
    </>
  );
}
