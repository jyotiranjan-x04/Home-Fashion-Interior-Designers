import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        if (
          credentials.email === process.env.ADMIN_EMAIL &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: "1", name: "Atelier Admin", email: process.env.ADMIN_EMAIL, role: "ADMIN" };
        }
        
        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.role = (user as any).role;
        }
        return token;
    },
    async session({ session, token }) {
        if (session.user) {
            // @ts-ignore
            session.user.role = token.role;
        }
        return session;
    }
  }
});
