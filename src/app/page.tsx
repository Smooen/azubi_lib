import Image from "next/image";
import styles from "./page.module.css";
import Book from "./list/book.tsx"
// default page -> will probably be login or dashboard later on

export default function Home() {
  let books = ['Harry Potter', 'Dune', 'Lord of the Rings'];

  return (
    <div> 
      <h1>Testing</h1>
      {books.map((title) => (
        <Book title={title} />
      ))}
    </div>
  );
}
