import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const allEventsHandler = () => {
    router.push({
      pathname: "/events",
    });
  };
  return (
    <>
      <h1>HOMEPAGE</h1>
      <button onClick={allEventsHandler}>See All Events</button>
    </>
  );
}
