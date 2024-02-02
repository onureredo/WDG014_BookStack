import { useState } from 'react';
import axios from 'axios';

function NewBookForm({ onNewBook }) {
  const [newBook, setNewBook] = useState({
    name: '',
    author: '',
    image_url: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://wdg014-bookstack-wpjy.onrender.com/books',
        newBook
      );
      setNewBook({ name: '', author: '', image_url: '' }); // reset inputs after post
      alert('Book added');
      onNewBook(response.data);
    } catch (err) {
      console.error('Error posting book', err);
    }
  };

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          value={newBook.name}
          onChange={handleChange}
          placeholder='Book name'
          required
        />
        <input
          name='author'
          value={newBook.author}
          placeholder='Book author'
          onChange={handleChange}
          required
        />
        <input
          name='image_url'
          value={newBook.image_url}
          placeholder='Book img url'
          onChange={handleChange}
          required
        />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
}

export default NewBookForm;
