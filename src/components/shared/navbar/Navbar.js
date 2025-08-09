import Link from 'next/link';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser, FaHome } from "react-icons/fa";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Navbar = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const Navlinks = () => {
        return (
            <>
                <li>
                    <Link href="/" className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">
                        <FaHome className="text-sm" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">
                        <FaUser className="text-sm" />
                        Profile
                    </Link>
                </li>
                <li>
                    {user ? (
                        <LogoutLink className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                            Sign Out
                        </LogoutLink>
                    ) : (
                        <LoginLink className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                            Sign In
                        </LoginLink>
                    )}
                </li>
            </>
        )
    }

    return (
        <div className='bg-white/90 dark:bg-gray-900/90 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300'>
            <div className='container mx-auto px-4'>
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
                            Blog's Sai
                        </Link>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        <Navlinks />
                        <div className="ml-2">
                            <ThemeToggle />
                        </div>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle hover:bg-blue-50 dark:hover:bg-gray-800">
                                <FaBarsStaggered className="text-xl text-gray-700 dark:text-gray-300" />
                            </div>
                            <ul className="dropdown-content menu bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 z-[1] w-52 p-3 mt-2">
                                <Navlinks />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;