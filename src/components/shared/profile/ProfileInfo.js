'use client';
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Loader from "../loader/Loader";

const ProfileInfo = () => {
    const { user, isLoading } = useKindeBrowserClient();

    if (isLoading) return <Loader />;
    if (!user) return <div>No user data available</div>;

    console.log(user);

    return (
        <>
            <div className="mt-4">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Full Name:</strong> {user?.given_name} {user?.family_name}</p>
            </div>
        </>
    );
}

export default ProfileInfo;