import Image from "next/image";
import AddressIcon from "../icons/AddressIcon";
import CalendarIcon from "../icons/CalendarIcon";
import CustomButton from "./CustomButton";

const EventItem = ({ event: { image, title, date, location, id } }) => {
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formatedAddress = location.replace(", ", "\n");
    return (
        <li className="flex border rounded-2xl flex-col md:flex-row overflow-hidden bg-white">
            <Image src={"/" + image} alt={title} width={190} height={160} />
            <div className="p-3 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <div className="flex gap-2">
                        <CalendarIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className="flex gap-2  items-center">
                        <AddressIcon />
                        <pre>{formatedAddress}</pre>
                    </div>
                </div>
                <div className=" flex justify-end ">
                    <CustomButton href={`/events/${id}`} icon={true} >
                        explore Event
                    </CustomButton>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
