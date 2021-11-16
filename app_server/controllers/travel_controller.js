// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

//REPLACE WITH HTTPS REQUEST MODULE INSTEAD OF STATIC JSON
const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
}