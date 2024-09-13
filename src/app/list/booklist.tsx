import Book from "./book.tsx"

export default function BookList({books}) {
	return (
		<div>
			{books.map((title) => (
				<Book title={title} />
			))}
		</div>
	)
}
