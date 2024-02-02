import { useState, useEffect } from 'react';
import axios from 'axios';
import NewBookForm from './NewBookForm';
import DeleteButton from './DeleeBook';
import EditBookForm from './EditBookForm';

function BookList() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    axios
      .get('https://wdg014-bookstack-wpjy.onrender.com/books')
      .then((res) => {
        //   console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleNewBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDelete = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const handleBookUpdated = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    setEditingBook(null);
  };

  // handleBookUpdated Funktion aktualisiert die Buchliste, indem sie das geänderte Buch durch das neue ersetzt und schließt den Edit.

  return (
    <div>
      <NewBookForm onNewBook={handleNewBook} />
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <img src={book.image_url} alt={book.name} width='25%' />
          <p>
            <em>Author: {book.author}</em>
          </p>

          {editingBook === book.id ? (
            <EditBookForm
              book={book}
              onCancel={() => setEditingBook(null)}
              onBookUpdated={handleBookUpdated}
            />
          ) : (
            <div>
              <button onClick={() => setEditingBook(book.id)}>Edit</button>
              <DeleteButton bookId={book.id} onDelete={handleDelete} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookList;
