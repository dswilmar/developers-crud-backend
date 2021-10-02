const express = require('express');
const router = express.Router();

const DeveloperController = require('../controllers/DeveloperController');

router.get('/', DeveloperController.all);
router.get('/:id', DeveloperController.one);
router.post('/', DeveloperController.create);
router.put('/:id', DeveloperController.update);
router.delete('/:id', DeveloperController.delete);

module.exports = router;