import ProfileInfo from "@/components/shared/profile/ProfileInfo";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("/api/auth/login");
    }

    return (
        <div className="container mx-auto p-4">
            <div className="">
                <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
                {user ? (
                    <ProfileInfo />
                ) : (
                    <p>No user found, Please login first!</p>
                )}
            </div>
        </div>
    );
};

export default Profile;