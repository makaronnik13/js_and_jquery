var express = require('express');
var path = require('path');
var router = express.Router();
var deprecate = require('depd')('response-time');
var onHeaders = require('on-headers');
/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public','index.html'));
});

router.get('/button', function(req, res) {
    res.json(randomizeButton());
});

router.get('/package', function(req, res) {
    res.json('nothing');
});

function createSetHeader() {
    // header name

    var header = 'X-Response-Time';
    return function setResponseHeader(req, res, time) {

        if (res.getHeader(header)) {
            return
        }

        var val = time.toFixed(digits);
        res.setHeader(header, val);
    }
}

function WebObject(name, color, image) {
    this.color = color;
    this.name = name;
    this.b_image = image;
}

function randomizeButton(){
    var _button = new WebObject("button N"+Math.floor(Math.random()*1000),getRandomColor(),'/images/'+(Math.floor(Math.random()*20)+1).toString()+'.png');
    return _button;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

module.exports = router;
//module.exports = responseTime;
createSetHeader();