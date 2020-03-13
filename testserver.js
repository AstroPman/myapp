var express = require('express');
var app = express();

// port8000を解放
app.get('/', (req, res)=>{
	res.send('server is running on docker conatainer!!');
})
app.listen(8000, function() {
  console.log('Myapp listening on port 8000!');
});
