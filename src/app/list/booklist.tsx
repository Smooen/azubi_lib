import Book from "./book"
import { useRouter } from "next/navigation";

export default function BookList({books}) {
	const router = useRouter();

	const handleBookClick = (isbn) => {
		router.push(`/details/${isbn}/`);
	}

	return (
		<ul role="list" className="divide-y divide-gray-100">
			{books.map((props) => (
				<div>
					<button onClick={() => handleBookClick(props.isbn)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">{props.isbn} - Details</button>
					<Book {...props} />
				</div>
			))}
		</ul>
	)
}
