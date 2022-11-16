const express = require('express');
const router = new express.Router();
const app = express();
app.use(express.json());
const{ upload,  addImage} = require('../Fileupload/prodImage');
const {
    newProd,
    prod,
    prodName,
    prodId,
    prodCat,
    updateProd,
    deleteProd,
} = require('../controllers/product');


router.post('/prodImage/:id' ,upload.array('image') , addImage);
router.post('/newProd',newProd);
router.get('/prod',prod);
router.get('/prodName',prodName);
router.get('/prodId',prodId);
router.get('/prodCat',prodCat);
router.patch('/:id',updateProd);
router.delete('/:id',deleteProd);


module.exports=router;