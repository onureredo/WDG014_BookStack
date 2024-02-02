import { useState, useEffect } from 'react';
import axios from 'axios';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://wdg014-bookstack.onrender.com/books').then((res) => {
      console.log(res);
    });
  }, []);

  return <div></div>;
}

export default BookList;
