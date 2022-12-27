import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    {
      id: "jake",
      name: "Jake",
    },
    {
      id: "minh",
      name: "Minh",
    },
  ];

  return (
    <div>
      <h1>Client Page</h1>
      {/* there are 2 ways of using LINK */}

      {/* 1 */}
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>

      {/* 2 */}
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
