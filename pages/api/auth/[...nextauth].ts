import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
})
