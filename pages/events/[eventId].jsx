import EventData from "../../components/eventsDetails/EventData";
import { Post } from "../../backend/PostsModule.js";

const EventDetailsPage = ({ data }) => {
    if (!data)
        return (
            <div className="text-center text-2xl font-bold text-red-700">
                Loading ...
            </div>
        );

    data = JSON.parse(data);

    return (
        <div className="flex flex-col ">
            <div className="flex justify-center h-[200px] pt-6 bg-gradient-to-tr from-blue-800 to-green-700 sm:text-3xl md:text-5xl text-2xl text-center font-bold text-white">
                {data.title}
            </div>
            <div className="bg-green-200  flex  items-center  flex-col">
                <div className="-translate-y-1/4 w-auto max-w-xl flex flex-col justify-center items-center gap-4 sm:gap-10 ">
                    <EventData eventDetails={data} />
                    <div className="text-center text-sm text-gray-800 mx-3 sm:text-xl">
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps(context) {
    const { eventId } = context.params;
    let data = await Post.findByPk(eventId);

    data = JSON.stringify(data);

    return {
        props: {
            data,
        },
    };
}

export async function getStaticPaths() {
    let data = await Post.findAll({
        attributes: ["id"],
    });
    
    data = JSON.parse(JSON.stringify(data))
    let paths = data.map(item => ({params: { eventId: item.id }}))

    return {
        paths,
        fallback: false,
    };
}

export default EventDetailsPage;
