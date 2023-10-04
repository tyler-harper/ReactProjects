import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Book } from './Book';
import { booklist } from './booklist';

const BookStore = () => {
   return (
    booklist.map((book) => {
        return <Book {...book} key={book.id} />;
    })
   )
}





const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookStore/>)

