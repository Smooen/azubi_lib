import Image from "next/image";
import styles from "./page.module.css";
import BookList from "./list/booklist.tsx"
// default page -> will probably be login or dashboard later on

export default function Home() {
  // books from database
  let books = ['Harry Potter', 'Dune', 'Lord of the Rings'];

  return (
    <div> 
      // search
      // logo

      <h1>Testing</h1>
      <BookList books={books}/>


      // button scroll to top
    </div>
  );
}
