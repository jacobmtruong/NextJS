import Link from "next/link";

export default function EventItem(props) {
  const { title, image, location, date, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li
      key={id}
      style={{
        border: "1px solid black",
        padding: "30px",
        width: "fit-content",
      }}
    >
      <img src={image} alt="event photo" style={{ width: "300px" }} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
