import EventList from "../../components/events/EventList";
import Filter from "../../components/filter/Filter";
import {Post} from '../../backend/PostsModule'

const AllEventsPage = ({data}) => {
   
    if(!data)return (<div>Loading...</div>)

    data = JSON.parse(data)

    return (
        <>
            <Filter />
            <EventList items={data} />
        </>
    );
};


export async function getStaticProps() {
    let data = await Post.findAll()
    data = JSON.stringify(data)
    return {
        props : {
            data
        }
    }
}

export default AllEventsPage;
