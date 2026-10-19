const router = require('express').Router();
const ctrl = require('../controllers/base.controller')(require('../models/project.model'));

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);
router.delete('/', ctrl.removeAll);

module.exports = router;