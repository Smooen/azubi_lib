import Book from "./book.tsx"

export default function BookList({books}) {
	return (
		<ul role="list" className="divide-y divide-gray-100">
			{books.map((props) => (
				<Book {...props} />
			))}
		</ul>
	)
}
