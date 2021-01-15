// import { useState } from "react";
import { useState } from "react";
import BookFile from "../components/CardsPages/BookFile";


const EbookLibrary = () => {

    let [books, setBooks] = useState([
        { title: 'Book 01', author: 'Ardian', id: 1 },
        { title: 'Book 02', author: 'Ardian', id: 2 },
        { title: 'Book 03', author: 'Ardian', id: 3 },
        { title: 'Book 04', author: 'Ardian', id: 4 },
        { title: 'Book 05', author: 'Ardian', id: 5 },
        { title: 'Book 06', author: 'Ardian', id: 6 },
        { title: 'Book 07', author: 'Ardian', id: 7 },
        { title: 'Book 08', author: 'Ardian', id: 8 },
        { title: 'Book 09', author: 'Ardian', id: 9 },
        { title: 'Book 10', author: 'Ardian', id: 10 }
    ])

    const handleDelete = (id) => {
        const newBooks = books.filter((book) => book.id !== id);
        setBooks(newBooks);
    }

    const handleAdd = () => {
        const newBooks = newBooks.push()
    }

    return (
        <div className="ebook__library">
            <BookFile books={books} handleDelete={handleDelete} />
        </div>
    );
}

export default EbookLibrary;