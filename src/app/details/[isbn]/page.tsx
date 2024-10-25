import BookDetails from "./details";

export default async function Details({params}: { params: { isbn: string }}) {
	// let book = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:978-0-441-17271-9');
	//let book = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + params.isbn);
	let book = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn' + params.isbn);
	let content = await book.json();

	if (content.totalItems == 0) {
		return (
			<p className="accent-red-600">No book found on Google Books, ideally redirect to 404</p>
		)
	}
	let volumeInfo = content.items[0].volumeInfo;
	
	return (
		<div className="container mx-auto px-4">
			<BookDetails params={...volumeInfo}/>
		</div>
	);
}
