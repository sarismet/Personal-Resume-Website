var express = require('express');
var request = require('request');
var app = express();

const fs = require('fs')

app.use(express.static('.'));
app.use(express.urlencoded());
app.use(express.json());



app.get('/', function (_, respond) {
    respond.sendFile(path + 'master.html');
});

app.listen(80, () => {
    console.log("Example app listening at port 80")
})

app.post('/resume', function(_, respond) {
    var data = fs.readFileSync(path + 'files/resume.pdf');

    var clientServer = {
        uri: requestUL+"/papers/notify",
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    request(clientServer, function (error, response) {
        if (error) {
            console.log(error,response);
        }
        console.log("request is sent")
    });
	
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
        uri: requestUL+"/papers/sendEmail",
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
	    console.log("email is sent")
        return;

    });
    res.sendFile(path + 'master.html');
});
