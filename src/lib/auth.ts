/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { backendAuthRequest } from "./backend-auth";

export function createAuthOptions(): NextAuthOptions {
  // NextAuth reads its callback URL cookie on each OAuth request.
  // Keep the selected public signup role inside this request only.
  let selectedRole: string | undefined;
  return {
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
            const response = await backendAuthRequest("/auth/login", {
              email: credentials.email,
              password: credentials.password,
            });

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
          const destination = new URL(url, baseUrl);
          if (destination.origin !== new URL(baseUrl).origin) return baseUrl;
          const role = destination.searchParams.get("google_role");
          if (role && ["player", "gk", "guest"].includes(role)) {
            selectedRole = role;
          }
          return destination.toString();
        } catch {
          return baseUrl;
        }
      },

      async signIn({ user, account }) {
        if (account?.provider === "google") {
          try {
            if (!account.id_token) {
              return "/login?error=GoogleTokenMissing";
            }
            const data = await backendAuthRequest("/auth/google-login", {
              idToken: account.id_token,
              role: selectedRole || "player",
            });

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
            return "/login?error=GoogleBackendLoginFailed";
          }
        }
        return true;
      },
    },

    pages: {
      signIn: "/login",
      error: "/login",
    },

    debug: process.env.NODE_ENV !== "production",
  };
}

export const authOptions = createAuthOptions();
