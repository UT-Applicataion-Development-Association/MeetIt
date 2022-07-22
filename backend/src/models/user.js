const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        nickname: { type: String, required: true },
        name: { type: String, required: true },
        pronoun: { type: String, deafault: "" },
        description: { type: String, default: "" },
        avatar: { type: String },
        hosted_events: { type: [String], default: [] },
        participated_events: { type: [String], default: [] },
        
    },
    /* {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    } */
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;