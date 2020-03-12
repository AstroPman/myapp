

var request = require('request');
var options = {
  url: '/api/post',
method: 'POST',
}

request(options, function (error, response, body) {

    console.log(body);

})
