import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../events";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents} />;
}
