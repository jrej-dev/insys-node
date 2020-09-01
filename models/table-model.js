const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableSchema = new Schema(
    {
        player1: { type: String, required: true },
        player2: { type: String },
        player1Army: [{ type: String }],
        player2Army: [{ type: String }],
        map: { type: String, default: "Containers" },
        playerTime: { type: Number, default: 1500 },
        maxVal: { type: Number, default: 10 },
        createdAt: { type: String, default: Date.now()},
        isFull: { type: Boolean, default: false}
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Table', tableSchema);