'use client'
import BookDetails from "./details";

export default function Details({params}: { params: { isbn: string }}) {
	// just rawdog fetch google books api here with isbn from url?
	// how the fuck does react-ts typechecking work lmao
	
	return (
		<div>
			<BookDetails params={...params}/>
		</div>
	);
}
