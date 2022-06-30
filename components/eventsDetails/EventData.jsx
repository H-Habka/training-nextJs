import Image from "next/image";
import CalendarIcon from "../icons/CalendarIcon";
import AddressIcon from "../icons/AddressIcon";

const EventData = ({ eventDetails }) => {
    const humanReadableDate = new Date(eventDetails?.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formatedAddress = eventDetails?.location.replace(", ", "\n");
    return (
        <div className="flex sm:flex-row flex-col border border-black py-4 px-8 bg-gray-800 justify-center items-center gap-3 rounded ">
            <div className="rounded-full overflow-hidden border-[4px] sm:w-6/12 sm:h-1/2 w-4/5 ">
                <Image
                    src={"/" + eventDetails?.image}
                    alt={eventDetails?.title}
                    width={200}
                    height={200}
                    className=""
                />
            </div>
            <div className="p-2 flex flex-col gap-4">
                <div>
                    <div className="text-blue-500">
                        <CalendarIcon />
                    </div>
                    <div className="text-blue-200">{humanReadableDate}</div>
                </div>
                <div>
                    <div className="text-blue-500">
                        <AddressIcon />
                    </div>
                    <pre className="text-blue-200">{formatedAddress}</pre>
                </div>
            </div>
        </div>
    );
};

export default EventData;
