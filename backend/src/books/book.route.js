const express = require("express")
const { postBook, getAllBooks, getsingleBook, updateBook, deleteBook } = require('./bookcontroller')
const verifyAdminToken = require("../middleware/verifyAdminToken")
const router = express.Router()

router.post("/create-book", verifyAdminToken, postBook)

router.get('/', getAllBooks)

router.get('/:id', getsingleBook)

router.put('/edit/:id', verifyAdminToken, updateBook)

router.delete('/:id', verifyAdminToken, deleteBook)

module.exports = router;