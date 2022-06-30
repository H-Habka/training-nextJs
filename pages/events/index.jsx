import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";
import Filter from "../../components/filter/Filter";

const AllEventsPage = () => {
    const allEventsData = getAllEvents();
    return (
        <>
            <Filter />
            <EventList items={allEventsData} />
        </>
    );
};

export default AllEventsPage;
