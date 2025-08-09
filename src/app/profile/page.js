import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Profile = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
                        <div className="mb-6">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Your Profile</h1>
                            <p className="text-gray-600">Please sign in to view your profile information</p>
                        </div>
                        <LoginLink className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg">
                            Sign In
                        </LoginLink>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            Your Profile
                        </h1>
                        <p className="text-gray-600">Manage your account information and preferences</p>
                    </div>

                    {/* Profile Card */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        {/* Profile Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-6">
                            <div className="flex items-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mr-6">
                                    {user.picture ? (
                                        <img 
                                            src={user.picture} 
                                            alt={user.given_name || 'Profile'} 
                                            className="w-18 h-18 rounded-full object-cover"
                                        />
                                    ) : (
                                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">
                                        Welcome back, {user.given_name || user.family_name || 'User'}!
                                    </h2>
                                    <p className="text-blue-100">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Profile Information */}
                        <div className="p-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-6">Account Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">First Name</label>
                                        <p className="text-lg text-gray-900 font-medium">
                                            {user.given_name || 'Not provided'}
                                        </p>
                                    </div>
                                    
                                    <div className="border-l-4 border-indigo-500 pl-4">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Last Name</label>
                                        <p className="text-lg text-gray-900 font-medium">
                                            {user.family_name || 'Not provided'}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="border-l-4 border-purple-500 pl-4">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email</label>
                                        <p className="text-lg text-gray-900 font-medium">
                                            {user.email}
                                        </p>
                                    </div>
                                    
                                    <div className="border-l-4 border-green-500 pl-4">
                                        <label className="text-sm font-medium text-gray-500 uppercase tracking-wide">User ID</label>
                                        <p className="text-lg text-gray-900 font-medium font-mono text-sm">
                                            {user.id}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Features */}
                        <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                            <div className="flex flex-wrap gap-3">
                                <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200">
                                    Edit Profile
                                </button>
                                <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200">
                                    Preferences
                                </button>
                                <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors duration-200">
                                    Security
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;