import { useState, useEffect } from 'react';
import axios from 'axios';

function EditBookForm({ book, onCancel, onBookUpdated }) {
  const [formData, setFormData] = useState({
    name: book.name,
    author: book.author,
    image_url: book.image_url,
  });

  useEffect(() => {
    setFormData({
      name: book.name,
      author: book.author,
      image_url: book.image_url,
    });
  }, [book]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://wdg014-bookstack-wpjy.onrender.com/books/${book.id}`,
        formData
      );
      onBookUpdated(response.data);
      alert('book updated');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='author'
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='image_url'
          value={formData.image_url}
          onChange={handleChange}
          required
        />
        <button type='submit'>Update</button>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditBookForm;
