import Link from 'next/link';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const Navlinks = () => {
        return (
            <>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li>{user ? (
                    <Link href="/api/auth/logout" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Sign Out
                    </Link>
                ) : (
                    <Link href="/api/auth/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign In
                    </Link>
                )}</li>
            </>
        )
    }

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Blog's</a>
                </div>
                <div className="navbar-end">
                    <ul className="hidden md:flex items-center gap-2 md:gap-4 p-2">
                        <Navlinks />
                    </ul>
                    <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <Navlinks />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;