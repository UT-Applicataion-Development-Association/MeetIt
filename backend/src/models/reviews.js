const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        userid: { type: String, required:true },
        eventid: { type: String, required:true },
        content: { type: String, default:"", length: 200}
    },

    /* {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    } */

);

const Review = mongoose.model("Review", reviewSchema, "reviews");

module.exports = Review;