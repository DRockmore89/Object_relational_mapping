const router = require('express').Router();
const categoryRoutes = require('/Users/ariel/Gt-bootcamp/homework/Object-Relational-mapping/routes/api/category-route');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/tag', tagRoutes);

module.exports = router;