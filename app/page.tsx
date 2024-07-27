import PostButton from "@/components/post-button";
import { Button } from "@/components/ui/button";
import createPost from "@/server/actions/create-post";
import getPosts from "@/server/actions/get-posts";

export default async function Home() {
  const { success, error } = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      {success &&
        success.map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      <form action={createPost}>
        <input
          className="bg-black"
          type="text"
          name="title"
          placeholder="Title"
        />
        <PostButton />
        <Button variant={"link"}> Submit</Button>
      </form>
    </div>
  );
}
