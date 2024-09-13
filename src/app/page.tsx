'use client'
import Image from "next/image";
import styles from "./page.module.css";
import BookList from "./list/booklist.tsx";
import SearchBar from "./components/searchbar.tsx";
import ScrollButton from "./components/scrollbutton.tsx";

export default function Home() {
  // books from database
  let books = ['Harry Potter', 'Dune', 'Lord of the Rings'];

  return (
    <div> 
      <SearchBar />
      // logo

      <h1>Testing</h1>
      <BookList books={books}/>

      <ScrollButton />
    </div>
  );
}
