'use client'
import { preload } from 'react-dom';
import styles from "./page.module.css";
import BookList from "./list/booklist.tsx";
import SearchBar from "./components/searchbar.tsx";
import ScrollButton from "./components/scrollbutton.tsx";

export default function Home() {
  // books from database
  let books = ['Harry Potter', 'Dune', 'Lord of the Rings'];
  let bookObjects = [ { "title": "Harry Potter", "author": "J.K. Rowling", "releaseDate": "1997", "availability": true }, { "title": "Dune", "author": "Frank Herbert", "releaseDate": "1987", "availability": false, "imageLink": "http://books.google.com/books/content?id=nrRKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" }, { "title": "Lord of the Rings", "author": "J.R.R. Tolkien", "releaseDate": "1977", "availability": true }]

  return (
    <div> 
      <SearchBar />

      <h1 className="text-3xl font-bold underline">Testing</h1>

      <BookList books={bookObjects}/>

      <ScrollButton />
    </div>
  );
}
