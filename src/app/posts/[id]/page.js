import Link from 'next/link';
import { mockPosts } from '@/data/mockPosts';

export default async function CardDetails({ params }) {
    const { id } = await params;
    const post = mockPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
                    <p className="text-gray-600 mb-8">The post you're looking for doesn't exist.</p>
                    <Link className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg' href="/">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link 
                            className='inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200' 
                            href="/"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Articles
                        </Link>
                    </div>

                    {/* Article Header */}
                    <header className="mb-8">
                        <div className="mb-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                                {post.category}
                            </span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {post.title}
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                {post.author}
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                {post.readTime}
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <article className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="p-8 md:p-12">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                                    {post.body}
                                </p>
                                
                                {/* Extended content placeholder */}
                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p>
                                        This is an expanded view of the article. In a real application, this would contain the full article content with proper formatting, images, code snippets, and other rich media elements.
                                    </p>
                                    <p>
                                        The content would be much longer and would include detailed explanations, examples, and practical insights related to {post.category.toLowerCase()} topics.
                                    </p>
                                    <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-600">
                                        "This article provides valuable insights for developers and designers looking to improve their skills in {post.category.toLowerCase()}."
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Navigation */}
                    <div className="mt-12 text-center">
                        <Link 
                            className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg' 
                            href="/"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to All Articles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}