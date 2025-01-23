import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="container mx-auto md:px-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Blog's</h1>
                    <nav className="flex space-x-4">
                        <Link href="/">Home</Link>
                        {user ? (
                          <Link href="/profile">Profile</Link>
                        ) : (
                            <Link href="/api/auth/login">Profile</Link>
                        )}
                    </nav>
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <>
                                <span>{user.family_name}</span>
                                <Link href="/api/auth/logout" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Out</Link>
                            </>
                        ) : (
                            <>
                                <Link href="/api/auth/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</Link>
                                <Link href="/api/auth/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;