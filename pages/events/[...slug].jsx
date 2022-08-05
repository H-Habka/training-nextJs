import { getFilteredEvents } from "../../dummy-data.js";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList.jsx";

const FilterdEventsPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData)
        return (
            <p className="mx-auto mt-4 w-fit text-3xl font-bold text-slate-800">
                {" "}
                ... Loading Data
            </p>
        );

    const filterdEvents = getFilteredEvents({
        year: +filterData[0],
        month: +filterData[1],
    });

    if (filterdEvents.length == 0 && filterData)
        return (
            <p className="mx-auto mt-4 w-fit text-3xl font-bold text-slate-800">
                {" "}
                No Data Found
            </p>
        );

    return (
        <>
            <EventList items={filterdEvents} />
        </>
    );
};

export default FilterdEventsPage;
