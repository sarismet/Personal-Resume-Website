var express = require('express');
var app = express();
const fs = require('fs')

app.use(express.static('.'));

app.get('/', function (req, res) {
    res.sendFile('/mnt/c/Users/ismet/Desktop/Personal-Resume-Website/master.html');
});

app.listen(8081, () => {
    console.log("Example app listening at port 8081")
})

app.post('/resume', function(req, res, next) {
    var data = fs.readFileSync('/mnt/c/Users/ismet/Desktop/Personal-Resume-Website/files/resume.pdf');
    res.contentType("application/pdf");
    res.send(data);
});