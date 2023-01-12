import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../events";

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventList items={events} />
    </Fragment>
  );
}
export default AllEventsPage;
