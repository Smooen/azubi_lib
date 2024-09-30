import Link from "next/link";

interface Book {
	isbn: string;
	imageLink: string;
	title: string;
	author: string;
	authors: string[];
	pageCount: number;
	releaseDate: string;
	availability: boolean;
	publisher: string;
}

export default function Book({...params}: Book)
{
	return (
		<Link href={`/details/${params.isbn}/`}>
			<li className="flex justify-between gap-x-6 py-5 hover:bg-gray-200">
				<img alt="" src={params.imageLink}/>
				<div className="min-w-0 flex-auto">
					<p className="text-sm font-semibold leading-6 text-gray-900">{params.title}</p>
					<p className="mt-1 truncate text-xs leading-5 text-gray-500">{params.author}</p>
				</div>
				<div className="mt-1 flex items-center gap-x-1.5">
					<p>{params.releaseDate}</p>
					<div>{params.availability ? '🟢' : '🔴'}</div>
				</div>
			</li>
		</Link>
	)
}
