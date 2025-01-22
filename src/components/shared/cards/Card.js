import Link from 'next/link';
import React from 'react';

const Card = ({ post }) => {

    return (
        <div href={`/posts/${post.id}`} className="p-6 rounded-lg shadow bg-gray-900 flex flex-col justify-between">
            <Link href={`/posts/${post.id}`} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer hover:text-blue-100">{post.title}</Link>
            <Link href={`/posts/${post.id}`} className="px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                Read more
            </Link>
        </div>
    )
}

export default Card;