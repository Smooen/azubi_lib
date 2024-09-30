import Book from "./book"
import { useRouter } from "next/navigation";

export default function BookList({books}) {
	const router = useRouter();

	const handleBookClick = (isbn: string) => {
		router.push(`/details/${isbn}/`);
	}

	return (
		<div className="p-5 mb-4 border border-gray-300 rounded-lg bg-gray-50">
		<ul role="list" className="divide-y-2 divide-gray-200">
			{books.map((props) => (
				<div key={props.isbn}>
					<Book {...props} />
				</div>
			))}
		</ul>
		</div>
	)
}
