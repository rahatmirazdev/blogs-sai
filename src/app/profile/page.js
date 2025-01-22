import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="container mx-auto p-4">
            <div className="">
                <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
                {user ? (
                    <div className="mt-4">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Full Name:</strong> {user?.given_name} {user?.family_name}</p>
                    </div>
                ) : (
                    <p>No user found, Please login first!</p>
                )}
            </div>
        </div>
    );
};

export default Profile;