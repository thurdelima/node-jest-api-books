import * as Yup from 'yup';
import User from '../models/User';
import Book from '../models/Book';


class BookController {
    async store(req, res) {

        const schema = Yup.object().shape({
            title: Yup.string().required(),
            pcompany: Yup.string().required(),
            language: Yup.string().required(),
            qpage: Yup.string().required(),
            isbn: Yup.string().required(),
            user_id: Yup.number().required(),
            rented: Yup.boolean().required()
        });


        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails. Please, verify your fields sent!' });
        }

        const { user_id } = req.body;

        const isUser = await User.findOne({
            where: { id: user_id },
        });



        if (!isUser) {
            return res
                .status(401)
                .json({ error: 'User does not exist!' });
        }




        const book = await Book.create(req.body);



        return res.json(book);




    }

    async viewBook(req, res) {

        const bookObject = await Book.findOne({
            where: { id: req.params.id },
        });

        if (bookObject == null) {
            return res.status(400).json({ error: "Book does not exist." });
        } else {
            return res.json(bookObject);
        }

    }

    async giveBook(req, res) {

        const bookObject = await Book.findOne({
            where: { id: req.params.id },
        });

        if (bookObject == null) {
            return res.status(400).json({ error: "Book does not exist." });
        }

        if (bookObject.rented) {

            bookObject.rented = false;

            await bookObject.save();

            return res.json({ message: "Book gave with Success!", book: bookObject });
        } else {


            return res.status(400).json({ message: "The book has already been delivered" });
        }

    }

    async rentBook(req, res) {

        const bookObject = await Book.findOne({
            where: { id: req.params.id },
        });

        if (bookObject == null) {
            return res.status(400).json({ error: "Book does not exist." });
        }


        if (bookObject.rented) {
            return res.status(400).json({ error: "The Book is rented. Verify other books to rent!" });
        } else {

            bookObject.rented = true;

            await bookObject.save();

            return res.json({ message: "Book rented with Success!", book: bookObject });
        }





    }

    async delete(req, res) {

        const bookObject = await Book.findOne({
            where: { id: req.params.id },
        });

        if (bookObject == null) {
            return res.status(400).json({ error: "Book does not exist." });
        }

        if (bookObject.rented) {
            return res
                .status(400)
                .json({ error: 'Cannot delete book while rented!' });
        }

        const bookDeleted = await Book.destroy({
            where: { id: req.params.id },
        });

        return res.json(bookDeleted);
    }

    async update(req, res) {


        const schema = Yup.object().shape({
            title: Yup.string().required(),
            pcompany: Yup.string().required(),
            language: Yup.string().required(),
            qpage: Yup.string().required(),
            isbn: Yup.string().required(),
            user_id: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails. Please, verify your fields sent!' });
        }


        const { title, pcompany, language, qpage, isbn, user_id } = req.body;

        const isUser = await User.findOne({
            where: { id: user_id },
        });

        const isBook = await Book.findOne({
            where: { id: req.params.id },
        });

        if (!isBook || !isUser) {
            return res
                .status(401)
                .json({ error: 'Book or User does not exist. Please, verify your fields sent!' });
        }

        if (isBook.rented) {
            return res
                .status(401)
                .json({ error: 'Cannot update book while rented!' });
        }



        isBook.title = title;
        isBook.pcompany = pcompany;
        isBook.language = language;
        isBook.qpage = qpage;
        isBook.isbn = isbn;
        isBook.rented = false;


        await isBook.save();

        return res.json(isBook);
    }
}

export default new BookController();
