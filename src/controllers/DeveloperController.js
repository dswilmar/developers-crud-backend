const { response } = require('express');
const DeveloperModel = require('../models/DeveloperModel');

class DeveloperController {

    //GET
    async all(req, res) {
        await DeveloperModel.find()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    //GET
    async one(req, res) {
        await DeveloperModel.findById({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
    
    //POST
    async create(req, res) {        
        const developer = new DeveloperModel(req.body);
        await developer.save()
        .then(response => {
            return res.status(201).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    //UPDATE
    async update(req, res) {        
        await DeveloperModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    //DELETE
    async delete(req, res) {
        await DeveloperModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        }).
        catch(error => {
            return res.status(500).json(error);
        });
    }
}

module.exports = new DeveloperController();