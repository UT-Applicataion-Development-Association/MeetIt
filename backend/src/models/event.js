const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        name: { type: String, required: true },
        location: { type: String, required: true },
        start_time: { type: Date, required: true },
        end_time: { type: Date, required: true },
        capacity: { type: Number, requried: true },
        fee_detail: { type: String, default: "" },
        description: { type: String, length: 200, default: "" },
        price: { type: Number, default: 0 },
        hostid: { type: [{ address: String, id: Number }], required: true},
/*         host_user_obj_id
        participant_obj_id */
    },

    /* {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    } */
);

const Event = mongoose.model("Event", eventSchema, "events");

module.exports = Event;