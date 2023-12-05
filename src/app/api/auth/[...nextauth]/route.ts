import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          firstName: profile.given_name,
          locale: profile.locale,
        };
      },
    }),
  ],
  callbacks: {
    // async signIn({ profile }: { profile: object }) {
    //   console.log(profile);
    //   return profile;
    // },
    // async jwt({ profile }) {
    //   return profile;
    // },
    // async session({ session, profile, user }) {
    //   // session.profile = profile;
    //   // console.log(session);
    //   // console.log("profile: " + profile);
    //   // console.log(user);
    //   console.log("session: ");
    //   console.log(session);
    //   return session;
    // },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
