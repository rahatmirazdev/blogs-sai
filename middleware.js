import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function middleware() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        redirect("/api/auth/login");
    }
}

export const config = {
    matcher: "/profile",
};