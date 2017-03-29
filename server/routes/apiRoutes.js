const express = require("express");

const router = express.Router();

router.use('/auth', require('../api/auth.api'));
router.use('/category', require('../api/category.api'));
router.use('/file', require('../api/file.api'));
router.use('/product', require('../api/product.api'));
router.use('/role', require('../api/role.api'));
router.use('/store', require('../api/store.api'));

module.exports = router;