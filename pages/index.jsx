import EventList from "../components/events/EventList";
import useSWR from "swr";
import { Post } from "../backend/PostsModule.js";
import Registre from '../components/signup/Registre'

const HomePage = ({ data }) => {

    if(!data)return (<div>Loading...</div>)

    data = JSON.parse(data);

    const featuredEvents = data.filter((item) => item.isFeatured);

    return (
        <div>
            <Registre />
            <EventList items={featuredEvents} />
        </div>
    );
};

export async function getStaticProps() {
    let data = await Post.findAll();
    data = JSON.stringify(data);

    return {
        props: {
            data,
        },
    };
}

export default HomePage;
