const Book = require('./book.model')

const postBook = async function (req, res) {
    try {
        const newBook = await Book({ ...req.body })
        await newBook.save()
        return res.status(200).send({ message: "Book posted successfully", book: newBook })
    } catch (error) {
        console.error("Error creating book", error)
        return res.status(500).send({ message: "Failed to create book" })
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).send( books )
    } catch (err) {
        console.error(err)
        res.status(500).send({ message: "Failed to fetch books" })
    }
}

const getsingleBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        if (!book) {
            res.status(404).send({ message: 'Book not found ' })
        }
        res.status(200).send( book )
    } catch (err) {
        console.error(err)
        res.status(500).send({ message: "Failed to fetch books" })
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true })
        if (!updatedBook) {
            res.status(404).send({ message: 'Book not found ' })
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        })
    } catch (err) {
        console.error(err)
        res.status(500).send({ message: "Failed to update books" })
    }
}

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBook = await Book.findByIdAndDelete(id)
        if (!deletedBook) {
            res.status(404).send({ message: "Book not found" })
        }
        res.status(200).send({
            message: "book Deleted successfully",
            book: deletedBook
        })
    } catch (err) {
        console.error(err)
        res.status(500).send({ message: "Failed to delete books" })
    }
}

module.exports = {
    postBook,
    getAllBooks,
    getsingleBook,
    updateBook,
    deleteBook
}