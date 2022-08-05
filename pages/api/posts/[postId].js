import { Sequelize } from "sequelize";
import { sequelize } from "../../../backend/estalishConnection.js";
import { Post } from "../../../backend/PostsModule.js";

export default async function handler(req, res) {
    const {postId} = req.query

    let response = await Post.findByPk(postId)

    res.status(200).json(response)
}
