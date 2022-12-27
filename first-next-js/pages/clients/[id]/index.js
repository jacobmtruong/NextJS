import { useRouter } from "next/router";

export default function GivenClientPage() {
  const router = useRouter();

  const loadProject = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {
        id: "andre",
        clientprojectid: "project a",
      },
    });
  };

  return (
    <div>
      <h1>Specific Given Client Page</h1>

      <button onClick={loadProject}>Load Project</button>
    </div>
  );
}
