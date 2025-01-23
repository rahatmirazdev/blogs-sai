import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Profile = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect('/api/auth/login');
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Welcome to your profile!</h1>

            <div className="mt-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-bold mb-4">User Information</h2>
                <div className="flex flex-col space-y-2">
                    <p className="text-gray-700"><span className="font-semibold">Name:</span> {user?.given_name}</p>
                    <p className="text-gray-700"><span className="font-semibold">Email:</span> {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;