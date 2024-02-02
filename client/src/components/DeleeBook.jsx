import axios from 'axios';

function DeleteButton({ bookId, onDelete }) {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://wdg014-bookstack-wpjy.onrender.com/books/${bookId}`
      );
      onDelete(bookId);
      alert('Book deleted');
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteButton;
