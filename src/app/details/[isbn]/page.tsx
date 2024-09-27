import BookDetails from "./details";

export default async function Details({params}: { params: { isbn: string }}) {
	// just rawdog fetch google books api here with isbn from url?
	// how the fuck does react-ts typechecking work lmao
	let book = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:978-0-441-17271-9');
	let content = await book.json();
	let volumeInfo = content.items[0].volumeInfo;
	console.log(content.items[0].volumeInfo)
	
	return (
		<div className="container mx-auto px-4">
			<BookDetails params={...volumeInfo}/>
		</div>
	);
}
