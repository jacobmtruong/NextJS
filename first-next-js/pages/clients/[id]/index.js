import { useRouter } from "next/router";

export default function GivenClientPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Specific Given Client Page</h1>
    </div>
  );
}
