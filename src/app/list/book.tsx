
export default function Book({
	imageLink,
	title, 
	author, 
	releaseDate, 
	availability
}) 
{
	return (
		// img
		<li className="flex justify-between gap-x-6 py-5">
			<img alt="" src={imageLink}/>
			<div className="min-w-0 flex-auto">
				<p className="text-sm font-semibold leading-6 text-gray-900">{title}</p>
				<p className="mt-1 truncate text-xs leading-5 text-gray-500">{author}</p>
			</div>
			<div className="mt-1 flex items-center gap-x-1.5">
				<p>{releaseDate}</p>
				<div>{availability ? '🟢' : '🔴'}</div>
			</div>
		</li>
		// availability
	)
}
