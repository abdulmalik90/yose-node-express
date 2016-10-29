var astroport = function(request, response) {
    response.setHeader('Content-Type', 'text/html');
    response.render('astroport.jade');
};

module.exports = astroport;