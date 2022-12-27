import events from "../../events";

export default function AllEvents() {
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

                <h3>{e.name}</h3>
                <p>{e.date.toDateString()}</p>
                <p>{e.address.street}</p>
                <p>{e.address.city}</p>
                <p>{e.address.zipcode}</p>
                <button>Explore Event</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
