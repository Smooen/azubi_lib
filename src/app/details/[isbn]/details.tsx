'use client'
export default function BookDetails({params}) {

	return (
		<div className="card max-w-sm w-full lg:max-w-full lg:flex">
			<img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" alt=""
			     src={params.imageLinks.thumbnail}/>
			<div
				className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
				<div><p className={""}>availability</p>
					<p>{params.pageCount}</p>
					<p>{params.publisher}</p></div>
				<div>
					<p className="text-gray-900 font-bold text-xl mb-2">{params.title}</p>
					<p>{params.description}</p>
					{params.authors.map((author: string) => (
						<p>{author}</p>
					))}
				</div>
			</div>
		</div>
	);
}
// example request: https://www.googleapis.com/books/v1/volumes?q=isbn:978-0-441-17271-9
