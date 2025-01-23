import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(req) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return new Response(null, {
            status: 302,
            headers: {
                Location: "/api/auth/login",
            },
        });
    }

    return new Response(null, {
        status: 200,
    });
}

export const config = {
    matcher: "/profile",
};