var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }
});
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.file('templates/index.html');
  }
});

server.route({
  method: 'GET',
  path: '/js/components/{filename}',
  handler: function(request, reply) {
    reply.file('js/components/'+request.params.filename);
  }
});



server.start(function () {
    console.log('Server running at:', server.info.uri);
});
