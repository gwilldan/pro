
import startDb from "@/libs/db";
import UserModel from "@/models/userModel";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
  
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
  }),
  GoogleProvider({
      clientId: process.env.GOOGLE_ID as string ,
      clientSecret: process.env.GOOGLE_SECRET as string,
  }),
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await startDb();
        const user = await UserModel.findOne({ email });
        if (!user) throw Error("email/password mismatch!");

        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) throw Error("email/password mismatch!");
        return {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt(params: any) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
      }

      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST };