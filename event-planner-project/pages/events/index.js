import { getFeaturedEvents } from "../../events";

export default function AllEvents() {
  const events = getFeaturedEvents();
  return (
    <>
      <h1>All Events Page</h1>
      <div>
        <ul>
          {events.map((e) => (
            <li key={e.id}>
              <div
                style={{
                  border: "2px solid black",
                  width: "fit-content",
                  padding: "20px",
                }}
              >
                <img
                  src={e.image}
                  alt="event photo"
                  style={{ width: "300px" }}
                />

                <h3>{e.title}</h3>
                <p>{e.date}</p>
                <p>{e.location}</p>
                <button>Explore Event</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
