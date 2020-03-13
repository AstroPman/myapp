
var express = require('express');
var app = express();
var ibm_db = require( 'ibm_db' );
var settings = require( './settings' );

app.use(express.static(__dirname + '/public'));


// port8000を解放
app.get('/', (req, res)=>{
	res.sendfile('index.html');
})
app.listen(8080, function() {
  console.log('Myapp listening on port 8000!');
});

var db_str = "DATABASE=" + settings.db_name
  + ";HOSTNAME=" + settings.db_host
  + ";UID=" + settings.db_username
  + ";PWD=" + settings.db_password
  + ";PORT=" + settings.db_port
  + ";PROTOCOL=TCPIP";



app.get('/api/vacantRoom', (req, res)=>{
      var sql = "select * from BOOKLIST";
      ibm_db.open( db_str, function( err, conn ){
        if( err ) return console.log( err );

        conn.query( sql, function( err, data ){
          if( err ) console.log( err );
          else console.log( data );
          res.send(data);

          conn.close( function(){
            console.log( 'done.' );
          });
        });
      });
  	});
