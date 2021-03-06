const router = require('express').Router();

const { accountAuth } = require('../middlewares/authMiddleware');
const { storeAuth } = require('../middlewares/storeMiddleware');

const {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getProducts,
  getAllProduct,
} = require('../controllers/product.controller');

// get all available product
router.get('/', accountAuth, getAllProduct);

router.get('/:storeId', accountAuth, storeAuth, getProducts);

router.post('/:storeId', accountAuth, storeAuth, createProduct);

router.get('/:storeId/:productId', accountAuth, storeAuth, getProduct);

router.put('/:storeId/:productId', accountAuth, storeAuth, updateProduct);

// delete size
router.put(
  '/delete/:storeId/:productId',
  accountAuth,
  storeAuth,
  deleteProduct
);

module.exports = router;
