const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.getAll);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/:id', AuthorController.getAuthor);
    app.put('/api/:id', AuthorController.updateAuthor);
    app.delete('/api/:id', AuthorController.deleteAuthor);
}