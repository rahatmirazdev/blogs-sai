import Link from 'next/link';
import React from 'react';

const Card = ({ post }) => {
    const getCategoryColor = (category) => {
        const colors = {
            'Development': 'bg-blue-100 text-blue-800',
            'Design': 'bg-pink-100 text-pink-800',
            'Backend': 'bg-green-100 text-green-800',
            'Performance': 'bg-yellow-100 text-yellow-800',
            'Accessibility': 'bg-purple-100 text-purple-800',
            'default': 'bg-gray-100 text-gray-800'
        };
        return colors[category] || colors.default;
    };

    return (
        <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden border border-gray-100">
            {/* Category Badge */}
            <div className="p-4 pb-0">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                </span>
            </div>
            
            {/* Content */}
            <div className="p-4 pt-2">
                <Link href={`/posts/${post.id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-3 line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.body}
                    </p>
                </Link>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {post.readTime}
                    </span>
                    <span>{post.author}</span>
                </div>
                
                {/* Read More Button */}
                <Link 
                    href={`/posts/${post.id}`} 
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 group-hover:shadow-md"
                >
                    Read More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Card;