const {Router} = require("express");
const { messagesController } = require("./controllers");

const router = Router();

router.get("/products", messagesController.getMessages)
router.get('/products/:id',messagesController.getName)

router.post('/products',messagesController.postAge)
router.delete('/products/:id',messagesController.deleteName)
router.get('/brands', messagesController.getfirstname)
router.post('/brands',messagesController.postlastname)
router.delete('/brands',messagesController.deleteFirsname)
module.exports = router;
