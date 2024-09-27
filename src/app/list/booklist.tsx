import Book from "./book"
import { useRouter } from "next/navigation";

export default function BookList({books}) {
	const router = useRouter();

	const handleBookClick = (isbn: string) => {
		router.push(`/details/${isbn}/`);
	}

	return (
		<ul role="list" className="divide-y divide-gray-100">
			{books.map((props) => (
				<div>
					<Book {...props} />
				</div>
			))}
		</ul>
	)
}
