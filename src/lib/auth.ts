/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter your email and password");
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            },
          );

          const response = await res.json();

          if (!res.ok || !response?.success) {
            throw new Error(response?.message || "Login failed");
          }

          const { user, accessToken } = response.data;

          return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            profileImage: user.profileImage,
            accessToken,
            provider: "credentials",
          };
        } catch (error) {
          console.error("Authentication error:", error);
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Authentication failed. Please try again.";
          throw new Error(errorMessage);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile",
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.role = user.role;
        token.profileImage = user.profileImage;
        token.accessToken = user.accessToken;
        token.provider = account?.provider || user.provider || "credentials";
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id,
        firstName: token.firstName,
        lastName: token.lastName,
        email: token.email,
        role: token.role,
        profileImage: token.profileImage,
        accessToken: token.accessToken,
        provider: token.provider,
      };
      return session;
    },

    async redirect({ url, baseUrl }) {
      try {
        const absoluteUrl = url.startsWith("/") ? `${baseUrl}${url}` : url;
        const redirectUrl = new URL(absoluteUrl);
        const role = redirectUrl.searchParams.get("google_role");

        if (role && ["player", "gk", "guest", "coach", "admin"].includes(role)) {
          (global as any).__GOOGLE_ROLE__ = role;
        }
      } catch (error) {
        console.error("Redirect callback parsing error:", error);
      }

      return url;
    },

    // Selected Google role has top priority.
    // If not selected, existing backend role is used; otherwise default "player".
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          let role = "player";
          const selectedRole = (global as any).__GOOGLE_ROLE__;
          const hasValidSelectedRole =
            !!selectedRole &&
            ["player", "gk", "guest", "coach", "admin"].includes(selectedRole);

          if (hasValidSelectedRole) {
            role = selectedRole;
            delete (global as any).__GOOGLE_ROLE__;
          }

          if (!hasValidSelectedRole && profile?.email) {
            try {
              const checkRes = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check-user?email=${encodeURIComponent(profile.email)}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                },
              );

              const checkResponse = await checkRes.json();
              if (checkResponse?.success && checkResponse?.data?.exists) {
                role = checkResponse.data.role || role;
              }
            } catch (error) {
              console.error("Error checking user:", error);
            }
          }

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google-login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idToken: account.id_token,
                role,
              }),
            },
          );

          const data = await response.json();

          if (!response.ok || !data?.success) {
            console.error("Backend Google login failed:", data);
            return false;
          }

          // Update user object with backend data
          user.id = data.data.user._id;
          user.firstName = data.data.user.firstName;
          user.lastName = data.data.user.lastName;
          user.email = data.data.user.email;
          user.role = data.data.user.role;
          user.profileImage = data.data.user.profileImage;
          user.accessToken = data.data.accessToken;

          return true;
        } catch (error) {
          console.error("Google signIn callback error:", error);
          return false;
        }
      }
      return true;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  // Enable debug logging
  debug: true,
};

// old code

// import { NextAuthOptions } from "next-auth";
// import { JWT } from "next-auth/jwt";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60,
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "email" },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "password",
//         },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Please enter your email and password");
//         }

//         try {
//           const res = await fetch(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 email: credentials.email,
//                 password: credentials.password,
//               }),
//             }
//           );

//           const response = await res.json();

//           console.log("response", response);

//           if (!res.ok || !response?.success) {
//             throw new Error(response?.message || "Login failed");
//           }
//         //   if (response.data.user.role === "USER") {
//         //     throw new Error("Only admin can access this page");
//         //   }
//           const { user, accessToken } = response.data;

//           return {
//             id: user._id,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             email: user.email,
//             role: user.role,
//             profileImage: user.profileImage,
//             accessToken,
//           };
//         } catch (error) {
//           console.error("Authentication error:", error);
//           const errorMessage =
//             error instanceof Error
//               ? error.message
//               : "Authentication failed. Please try again.";
//           throw new Error(errorMessage);
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     async jwt({ token, user }: { token: JWT; user?: any }) {
//       if (user) {
//         token.id = user.id;
//         token.firstName = user.firstName;
//         token.lastName = user.lastName;
//         token.email = user.email;
//         token.role = user.role;
//         token.profileImage = user.profileImage;
//         token.accessToken = user.accessToken;
//       }
//       return token;
//     },

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     async session({ session, token }: { session: any; token: JWT }) {
//       session.user = {
//         id: token.id,
//         firstName: token.firstName,
//         lastName: token.lastName,
//         email: token.email,
//         role: token.role,
//         profileImage: token.profileImage,
//         accessToken: token.accessToken,
//       };
//       return session;
//     },
//   },
// };
