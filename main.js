var path = require('path'),
    express = require('express'),
    request = require('request');
var app = express();
router = express.Router();

app.set('port', (process.env.PORT || 5000));


app.get('/', function(req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});

app.use(express.static(path.resolve('./public')));

app.get('/buildings', function(req, res) {

    request.get("https://webapi.brooklaw.edu/colleagueapi/buildings")
        .pipe(res);
});

app.listen(app.get('port'), function() {
    console.log('Application running on Port: ' + app.get('port'));
});