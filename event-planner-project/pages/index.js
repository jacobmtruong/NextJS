import EventList from "../components/events/events-list";
import { getFeaturedEvents } from "../events";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
}
