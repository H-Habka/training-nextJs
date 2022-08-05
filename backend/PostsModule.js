import { sequelize } from "./estalishConnection.js";
const { Sequelize, DataTypes } = require("sequelize");

export const Post = sequelize.define(
    "Posts",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        image: {
            type: DataTypes.STRING,
            // allowNull : false
        },
        isFeatured: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        modelName: "Posts",
    }
);


// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Posts); // true
