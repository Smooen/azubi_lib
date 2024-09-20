'use client'
import BookList from "./list/booklist";
import SearchBar from "./components/searchbar";
import ScrollButton from "./components/scrollbutton";

export default function Home() {
  // books from database
  let books = [ 
    { "isbn": "1", "title": "Harry Potter", "author": "J.K. Rowling", "releaseDate": "1997", "availability": true }, 
    { "isbn": "9780441172719", "title": "Dune", "author": "Frank Herbert", "releaseDate": "1987", "availability": false, "imageLink": "http://books.google.com/books/content?id=nrRKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" }, 
    { "isbn": "3", "title": "Lord of the Rings", "author": "J.R.R. Tolkien", "releaseDate": "1977", "availability": true }
  ]

  return (
    <div> 
      <SearchBar />

      <h1 className="text-3xl font-bold underline">Testing</h1>

      <BookList books={books}/>

      <ScrollButton />
    </div>
  );
}
