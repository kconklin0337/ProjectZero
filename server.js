var express = require('express'),
    logger  = require('morgan')('dev'),
    server  = express();

server.use(express.static(__dirname+'/Public'));
server.use(logger);
server.set('port', process.env.PORT || 8080);

server.get('/', home);
server.get('/gpsWatcher', gpsWatcher);


server.listen(server.get('port'), listenCallback);


function home(req, res){
  res.sendFile('/html/index.html', {root: __dirname+'/Public'});
}


function gpsWatcher(req, res){
  res.sendFile('/html/gpsWatcher.html', {root: __dirname+'/Public'});
}

function listenCallback(){
console.log('Now listening on port ' + server.get('port'));

}
