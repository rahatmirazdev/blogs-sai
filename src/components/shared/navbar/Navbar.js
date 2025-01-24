import Link from 'next/link';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = async () => {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const Navlinks = () => {
        return (
            <>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li>{user ? (
                    <LogoutLink className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Sign Out
                    </LogoutLink>
                ) : (
                    <LoginLink className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign In
                    </LoginLink>
                )}</li>
            </>
        )
    }

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <p className="btn btn-ghost text-xl">Blog's</p>
                </div>
                <div className="navbar-end">
                    <ul className="hidden md:flex items-center gap-2 md:gap-4 p-2">
                        <Navlinks />
                    </ul>
                    <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                            <FaBarsStaggered className="text-xl" />
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