import Link from 'next/link';

export default async function CardDetails({ params }) {
    const { id } = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return (
        <div className="container mx-auto p-4">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 pb-6">{post.body}</p>
                <Link className='px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700' href="/">Back to home</Link>
            </div>
        </div>
    )
}