import { useRouter } from "next/router";

export default function AllBlogPostsPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <>
      <h1>All Blog Posts Here</h1>
    </>
  );
}
