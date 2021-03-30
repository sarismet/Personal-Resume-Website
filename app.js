var express = require('express');
var request = require('request');
var app = express();

const fs = require('fs')

app.use(express.static('.'));
app.use(express.urlencoded());
app.use(express.json());


app.get('/', function (_, respond) {
    respond.sendFile('/Users/ismetsari/Desktop/Personal-Resume-Website/master.html');
});

app.listen(8081, () => {
    console.log("Example app listening at port 8081")
})

app.post('/resume', function(_, respond) {
    var data = fs.readFileSync('/Users/ismetsari/Desktop/Personal-Resume-Website/files/resume.pdf');
    respond.contentType("application/pdf");
    respond.send(data);
});

app.post('/send_mail', function(req, res,) {

    var send_req = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        message : req.body.massage
    }
    console.log("firstName: ",send_req)
    var clientServer = {
        uri: 'http://',
        body: JSON.stringify(send_req),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServer, function (error, response) {
        if (error) {
            console.log(error,response);
        }
        return;
    });
});
