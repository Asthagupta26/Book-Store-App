const Book = require("../model/Book");


const getAllBooks = async (req, res) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        return console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: "No books found" });
    }
    return res.status(200).json(books);
};

//Get by Id
const getById = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "No book found" });
    }
    return res.status(200).json({book});
};


const addBook = async (req, res) => {
    const { name, author, description, price, available,image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image,
        });
        await book.save();
    } catch (err) {
        return console.log(err);
    }
    if (!book) {
        return res.status(500).json({ message: "Unable to add the book" });
    }
    return res.status(201).json({book});
};

const updateBook = async (req, res) => {
    const id = req.params.id;
    const { name, author, description, price, available,image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image,
        });
        book = await book.save();
    } catch (err) {
        return console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to update the book" });
    }
    return res.status(200).json({book});
};

const deleteBook = async (req, res) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (err) {
        return console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Unable to delete the book" });
    }
    return res.status(200).json({message: "Book deleted successfully"});
};





exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;