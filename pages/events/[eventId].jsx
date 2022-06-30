import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import EventData from "../../components/eventsDetails/EventData";

const EventDetailsPage = () => {
    const {
        query: { eventId },
    } = useRouter();

    const eventDetails = getEventById(eventId);

    return (
        <div className="flex flex-col ">
            <div className="flex justify-center h-[200px] pt-6 bg-gradient-to-tr from-blue-800 to-green-700 sm:text-3xl md:text-5xl text-2xl text-center font-bold text-white">
                {eventDetails?.title}
            </div>
            <div className="bg-green-200  flex  items-center  flex-col">
                <div className="-translate-y-1/4 w-auto max-w-xl flex flex-col justify-center items-center gap-4 sm:gap-10 ">
                    <EventData eventDetails={eventDetails} />
                    <div className="text-center text-sm text-gray-800 mx-3 sm:text-xl">
                        {eventDetails?.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;
