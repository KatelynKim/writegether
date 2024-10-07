import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import connectToDB from "@/utils/connectToDB"
import User from "@/models/user"

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async signIn({ user: userInfo }) {
      try {
        await connectToDB()
        await User.findOneAndUpdate(
          { id: userInfo.id },
          { id: userInfo.id, email: userInfo.email, name: userInfo.name },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        )
        return true
      } catch (error) {
        console.error("Could not save the user in the database")
        return false
      }
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      return session
    }
  }
}

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }