const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Match = require('./models/match-info');
mongoose.connect('mongodb://127.0.0.1:27017/matches');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log("Database connected");
})

app.use(express.static(path.join(__dirname, 'scripts')));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    res.render('./matches/MatchDetails');
})

app.post('/matches', async (req, res) => {
    const match = new Match(req.body.match);
    await match.save();
    res.redirect('/matches');
})

app.get('/matches', async (req, res) => {
    const matches = await Match.find({});
    res.render('./Home', { matches });
})

app.get('/matches/:id', async (req, res) => {
    const match = await Match.findById(req.params.id);
    res.render('./matches/ScoreKeeper.ejs', { match });
})
app.listen(3000)
