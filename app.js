var express = require('express');
var app = express();


app.use(express.static('.'));

app.get('/', function (req, res) {
    res.sendFile('/mnt/c/Users/ismet/Desktop/Personal-Resume-Website/master.html');
});

app.listen(8081, () => {

    console.log("Example app listening at port 3000",)

})