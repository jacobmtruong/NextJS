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

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
