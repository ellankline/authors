const { request, response } = require('express');
const Author = require('../models/author.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports = {
    getAll: (request, response) => {
        Author.find({})
        .then((allAuthors) => {
            console.log(allAuthors);
            response.json(allAuthors);
        })
        .catch(err => response.json(err));
    },

    createAuthor: (request, response) => {
        Author.create(request.body)
            .then(product => response.json(author))
            .catch(err => response.json(err));
    },

    getAuthor: (request, response) => {
        Author.findOne({_id:request.params.id})
            .then(author => response.json(author))
            .catch(err => response.json(err))
    },

    updateAuthor: (request, response) => {
        Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
            .then(updatedAuthor => response.json(updatedAuthor))
            .catch(err => response.json(err))
    },

    deleteAuthor: (request, response) => {
        Author.deleteOne({_id:request.params.id})
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
    
}