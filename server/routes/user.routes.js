const router = require('express').Router();
const userCtrl = require('../controllers/user.controller');

router.post('/signin', userCtrl.signin);
router.post('/signout', userCtrl.signout);

router.get('/', userCtrl.verifyToken, userCtrl.getAll);
router.get('/:id', userCtrl.verifyToken, userCtrl.getById);
router.post('/', userCtrl.create);
router.put('/:id', userCtrl.verifyToken, userCtrl.update);
router.delete('/:id', userCtrl.verifyToken, userCtrl.remove);
router.delete('/', userCtrl.verifyToken, userCtrl.removeAll);

module.exports = router;