import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  console.log(router.query);

  return <div>Portfolio Page</div>;
};

export default index;
