const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
    player1: String,
    player2: String,
    points: Number
});


module.exports = mongoose.model('Match', MatchSchema);