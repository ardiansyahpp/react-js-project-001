// import { useState } from "react";

const BookFile = ({ books, handleDelete }) => {

    return (
        <div className="ebooks__container">
            {books.map(book => (
                <div className="book_data" keys={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <button onClick={() => handleDelete(book.id)} className='bookdelete__btn'>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BookFile;