// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Sequelize } from "sequelize";
import {
    checkConnection,
    sequelize,
} from "../../../backend/estalishConnection.js";
import { Post } from "../../../backend/PostsModule.js";

checkConnection();

export default async function handler(req, res) {
    // await sequelize.sync({ force: true });

    // const post1 = new Post({
    //   title: 'Networking for introverts',
    //   description:
    //     "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    //   location: 'New Wall Street 5, 98765 New Work',
    //   date: '2021-04-30',
    //   image: 'images/introvert-event.jpg',
    //   isFeatured: true,
    // });

    // const post2 = new Post({
    //   title: 'Networking for extroverts',
    //   description:
    //     'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    //   location: 'My Street 12, 10115 Broke City',
    //   date: '2022-04-10',
    //   image: 'images/extrovert-event.jpg',
    //   isFeatured: true,
    // });

    // const post3 = new Post({
    //   title: 'Programming for everyone',
    //   description:
    //     'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    //   location: 'Somestreet 25, 12345 San Somewhereo',
    //   date: '2021-04-12',
    //   image: 'images/coding-event.jpg',
    //   isFeatured: false,
    // });

    // await post1.save()
    // await post2.save()
    // await post3.save()

    let response = await Post.findAll()


    res.status(200).json(response);
}
