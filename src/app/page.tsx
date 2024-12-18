import BookList from "./list/booklist";
import SearchBar from "./components/searchbar";
import ScrollButton from "./components/scrollbutton";

export default async function Home() {

	// const books = [
	// 	{ "isbn": "9780441172719", "title": "Dune", "author": "Frank Herbert", "releaseDate": "1987", "availability": false, "imageLink": "http://books.google.com/books/content?id=nrRKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api" }, 
	// 	{
	// 		isbn: "9783641279110",
	// 		title: "1984",
	// 		author: "George Orwell",
	// 		releaseDate: "June 8, 1949",
	// 		availability: true
	// 	},
	// 	{
	// 		isbn: "9780198826736",
	// 		title: "Pride and Prejudice",
	// 		author: "Jane Austen",
	// 		releaseDate: "January 28, 1813",
	// 		availability: false
	// 	},
	// 	{
	// 		isbn: "9780007322596",
	// 		title: "The Lord of the Rings",
	// 		author: "J.R.R. Tolkien",
	// 		releaseDate: "July 29, 1954",
	// 		availability: true
	// 	},
	// 	{
	// 		isbn: "9781438119250",
	// 		title: "The Catcher in the Rye",
	// 		author: "J.D. Salinger",
	// 		releaseDate: "July 16, 1951",
	// 		availability: false
	// 	}
	// ];
	
	let req = await fetch("http://localhost:1323/Books");
	let books = await req.json();
	
  return (
	  <div className="container mx-auto mt-5">
		  <h1 className="text-3xl font-bold underline">Testing</h1>
		  
		  <SearchBar/>

		  <BookList books={books}/>

		  <ScrollButton/>
	  </div>
  );
}
