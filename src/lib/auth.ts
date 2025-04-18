import { getServerSession, Session, User } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./prisma";

export const authOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, user }: { session: Session; user: User }) {
            session.user.id = user.id;
            return session;
        },
    },
};

export async function getCurrentUser() {
    const session = await getServerSession(authOptions);
    return session?.user;
}
