import EventItem from "./EventItem";

const EventList = ({ items }) => {
    return (
        <ul className="flex flex-col gap-4 py-10 justify-center items-center min-h-[calc(100vh-68px)]">
            {items.map((event) => (
                <EventItem event={event} key={event.id} />
            ))}
        </ul>
    );
};

export default EventList;
