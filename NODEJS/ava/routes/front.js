const { any } = require('async');
var db = require('../config/database');
module.exports = function(app){
    var connetion = db();
        any
    app.get('/frontend', function(req, res){
        var query = connetion.query("SECTION * FROM conteudos WHERE categoria = 'frontend'",
            function(error, results, fields){
                console.log(error, results)
                res.render('paginas/frontend', {dados:results});
            });

            query.on('error', function(error){
                console.log("[mysql error:]", error);
            });
    });
}