/* eslint-disable @typescript-eslint/no-explicit-any */
// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

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
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           prompt: "select_account",
//           scope: "openid email profile",
//         },
//       },
//     }),
//   ],

//   callbacks: {
//     async signIn({ user, account, profile }) {
//       if (account?.provider === "google") {
//         try {
//           // First, check if user exists
//           const checkRes = await fetch(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check-user?email=${encodeURIComponent(profile?.email || "")}`,
//             {
//               method: "GET",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             }
//           );

//           const checkResponse = await checkRes.json();

//           let role = "player";

//           // Extract role from state parameter if it exists
//           if (account.state) {
//             try {
//               const stateParams = JSON.parse(decodeURIComponent(account.state));
//               role = stateParams.role || "player";
//             } catch (e) {
//               console.log("No role in state or invalid state", e);
//             }
//           }

//           // If user exists, use their existing role
//           if (checkResponse?.success && checkResponse?.data?.exists) {
//             role = checkResponse.data.role || role;
//           }

//           // Call Google login endpoint with role
//           const res = await fetch(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google-login`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 idToken: account.id_token,
//                 role: role,
//               }),
//             }
//           );

//           const response = await res.json();

//           if (!res.ok || !response?.success) {
//             console.error("Backend Google login failed:", response);
//             return false;
//           }

//           // Store backend tokens and user info
//           user.accessToken = response.data.accessToken;
//           user.id = response.data.user._id;
//           user.firstName = response.data.user.firstName;
//           user.lastName = response.data.user.lastName;
//           user.email = response.data.user.email;
//           user.role = response.data.user.role;
//           user.profileImage = response.data.user.profileImage;

//           return true;
//         } catch (error) {
//           console.error("Google login error:", error);
//           return false;
//         }
//       }
//       return true;
//     },

//     async jwt({ token, user, account, trigger, session }) {
//       if (user) {
//         token.id = user.id;
//         token.firstName = user.firstName;
//         token.lastName = user.lastName;
//         token.email = user.email;
//         token.role = user.role;
//         token.profileImage = user.profileImage;
//         token.accessToken = user.accessToken;
//         token.provider = account?.provider;
//       }

//       // Handle session update
//       if (trigger === "update" && session) {
//         token = { ...token, ...session };
//       }

//       return token;
//     },

//     async session({ session, token }) {
//       session.user = {
//         id: token.id,
//         firstName: token.firstName,
//         lastName: token.lastName,
//         email: token.email,
//         role: token.role,
//         profileImage: token.profileImage,
//         accessToken: token.accessToken,
//         provider: token.provider,
//       };
//       return session;
//     },
//   },

//   pages: {
//     signIn: "/login",
//     error: "/login",
//   },
// };

// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

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

//           if (!res.ok || !response?.success) {
//             throw new Error(response?.message || "Login failed");
//           }

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
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (user) {
//         token.id = user.id;
//         token.firstName = user.firstName;
//         token.lastName = user.lastName;
//         token.email = user.email;
//         token.role = user.role;
//         token.profileImage = user.profileImage;
//         token.accessToken = user.accessToken;
//         token.provider = account?.provider;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       session.user = {
//         id: token.id,
//         firstName: token.firstName,
//         lastName: token.lastName,
//         email: token.email,
//         role: token.role,
//         profileImage: token.profileImage,
//         accessToken: token.accessToken,
//         provider: token.provider,
//       };
//       return session;
//     },

//     async signIn({ user, account, url }) {
//       console.log("=== GOOGLE SIGNIN CALLBACK STARTED ===");
//       console.log("Account provider:", account?.provider);
//       console.log("Original URL:", url);

//       if (account?.provider === "google") {
//         try {
//           let role = "player"; // Default role

//           // Parse the URL to get role from callback URL
//           if (url) {
//             try {
//               const callbackUrl = new URL(url);
//               const roleFromUrl = callbackUrl.searchParams.get("role");
//               console.log("Role from URL:", roleFromUrl);

//               if (roleFromUrl && ["player", "gk", "coach", "admin"].includes(roleFromUrl)) {
//                 role = roleFromUrl;
//                 console.log("✅ Using role from URL:", role);
//               }
//             } catch (error) {
//               console.log("❌ Error parsing URL:", error);
//             }
//           }

//           console.log("📝 Final role to send to backend:", role);

//           // Call backend Google login endpoint
//           const response = await fetch(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google-login`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 idToken: account.id_token,
//                 role: role,
//               }),
//             }
//           );

//           const data = await response.json();
//           console.log("Backend response:", data);

//           if (!response.ok || !data?.success) {
//             console.error("❌ Backend Google login failed:", data);
//             return false;
//           }

//           // Update user object with backend data
//           user.id = data.data.user._id;
//           user.firstName = data.data.user.firstName;
//           user.lastName = data.data.user.lastName;
//           user.email = data.data.user.email;
//           user.role = data.data.user.role;
//           user.profileImage = data.data.user.profileImage;
//           user.accessToken = data.data.accessToken;

//           console.log("✅ Google signIn successful!");
//           console.log("User role set to:", user.role);

//           return true;
//         } catch (error) {
//           console.error("❌ Google signIn callback error:", error);
//           return false;
//         }
//       }
//       return true;
//     },
//   },

//   pages: {
//     signIn: "/login",
//     error: "/login",
//   },
// };




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

    // 🔥 CRITICAL FIX: Extract role from callback URL
    async redirect({ url, baseUrl }) {
      console.log("=== REDIRECT CALLBACK ===");
      console.log("Redirect URL:", url);
      console.log("Base URL:", baseUrl);

      try {
        // Handle relative URLs by making them absolute
        const absoluteUrl = url.startsWith("/") ? `${baseUrl}${url}` : url;
        const redirectUrl = new URL(absoluteUrl);

        console.log("Parsed redirect URL:", redirectUrl.href);
        console.log("Search params:", redirectUrl.searchParams.toString());

        // Extract role from query parameter
        const role = redirectUrl.searchParams.get("google_signup_role");
        console.log("Role from redirect URL:", role);

        if (role && ["player", "gk", "coach", "admin"].includes(role)) {
          console.log("🎯 Valid role found in redirect URL:", role);
          // Store in a global variable that can be accessed in signIn callback
          // This is a workaround since we can't pass data between callbacks easily
          (global as any).__GOOGLE_SIGNUP_ROLE__ = role;
          console.log("✅ Stored role in global variable");
        }
      } catch (error) {
        console.log("❌ Error parsing redirect URL:", error);
      }

      return url;
    },

    // 🔥 FIXED: Get role from global variable (set by redirect) or backend check
    async signIn({ user, account, profile }) {
      console.log("=== SIGNIN CALLBACK START ===");
      console.log("Account provider:", account?.provider);
      console.log("Profile email:", profile?.email);

      if (account?.provider === "google") {
        try {
          let role = "player"; // Default role
          let roleSource = "default";

          // METHOD 1: Try to get role from global variable (set by redirect callback)
          const globalRole = (global as any).__GOOGLE_SIGNUP_ROLE__;
          if (globalRole && ["player", "gk", "coach", "admin"].includes(globalRole)) {
            role = globalRole;
            roleSource = "redirect_callback";
            console.log("✅ Got role from redirect callback:", role);
            // Clean up
            delete (global as any).__GOOGLE_SIGNUP_ROLE__;
          }

          // METHOD 2: Check if user already exists in backend
          if (profile?.email) {
            try {
              const checkRes = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check-user?email=${encodeURIComponent(profile.email)}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              const checkResponse = await checkRes.json();
              console.log("User check response:", checkResponse);

              // If user exists, use their existing role (LOGIN scenario)
              // This overrides the role from redirect callback
              if (checkResponse?.success && checkResponse?.data?.exists) {
                role = checkResponse.data.role || role;
                roleSource = "existing_user";
                console.log("✅ User exists, using existing role:", role);
              } else if (roleSource === "default") {
                // User doesn't exist and no role from redirect (shouldn't happen in signup flow)
                console.log("ℹ️ New user with no role specified, using default:", role);
                roleSource = "new_user_default";
              }
            } catch (error) {
              console.log("❌ Error checking user:", error);
            }
          }

          console.log("🎯 Final role to send to backend:", role, `(source: ${roleSource})`);

          // Call backend Google login endpoint
          console.log("📤 Calling backend with role:", role);
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google-login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idToken: account.id_token,
                role: role,
              }),
            },
          );

          const data = await response.json();
          console.log("📥 Backend response:", {
            success: data?.success,
            message: data?.message,
            userRole: data?.data?.user?.role,
          });

          if (!response.ok || !data?.success) {
            console.error("❌ Backend Google login failed:", data);
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

          console.log("✅ Google signIn successful!");
          console.log("User role:", user.role);

          return true;
        } catch (error) {
          console.error("❌ Google signIn callback error:", error);
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

// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

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

//           if (!res.ok || !response?.success) {
//             throw new Error(response?.message || "Login failed");
//           }

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
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//       authorization: {
//         params: {
//           prompt: "select_account",
//           access_type: "offline",
//           response_type: "code",
//         },
//       },
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (user) {
//         token.id = user.id;
//         token.firstName = user.firstName;
//         token.lastName = user.lastName;
//         token.email = user.email;
//         token.role = user.role;
//         token.profileImage = user.profileImage;
//         token.accessToken = user.accessToken;
//         token.provider = account?.provider;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       session.user = {
//         id: token.id,
//         firstName: token.firstName,
//         lastName: token.lastName,
//         email: token.email,
//         role: token.role,
//         profileImage: token.profileImage,
//         accessToken: token.accessToken,
//         provider: token.provider,
//       };
//       return session;
//     },

//     // FIX: Use redirect callback instead of signIn callback
//     async redirect({ url, baseUrl }) {
//       console.log("=== REDIRECT CALLBACK ===");
//       console.log("Redirect URL:", url);
//       console.log("Base URL:", baseUrl);

//       // Parse the redirect URL to get role
//       try {
//         const redirectUrl = new URL(url);
//         const role = redirectUrl.searchParams.get("role");
//         console.log("Role from redirect URL:", role);

//         // Store role in session storage to use later
//         if (role && typeof window !== "undefined") {
//           sessionStorage.setItem("google_signup_role", role);
//         }
//       } catch (error) {
//         console.log("Could not parse redirect URL:", error);
//       }

//       return url;
//     },

//     // Replace the signIn callback with this improved version:
// async signIn({ user, account }) {
//   console.log("=== SIGNIN CALLBACK START ===");
//   console.log("Account provider:", account?.provider);
//   console.log("Account:", {
//     provider: account?.provider,
//     type: account?.type,
//     state: account?.state
//   });

//   if (account?.provider === "google") {
//     try {
//       let role = "player"; // Default role

//       // METHOD 1: Get role from state parameter (Most reliable)
//       if (account.state) {
//         try {
//           const stateParams = JSON.parse(decodeURIComponent(account.state));
//           console.log("State params:", stateParams);

//           if (stateParams.role && ["player", "gk", "coach", "admin"].includes(stateParams.role)) {
//             role = stateParams.role;
//             console.log("✅ Got role from state parameter:", role);
//           }
//         } catch (error) {
//           console.log("❌ Could not parse state parameter:", error);
//         }
//       }

//       // METHOD 2: Log everything for debugging
//       console.log("📊 Debug info:");
//       console.log("- Account ID token exists:", !!account.id_token);
//       console.log("- Role to send:", role);
//       console.log("- User email from account:", account.providerAccountId);

//       // Call backend Google login endpoint
//       console.log("📤 Calling backend...");
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google-login`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             idToken: account.id_token,
//             role: role,
//           }),
//         }
//       );

//       const data = await response.json();
//       console.log("📥 Backend response:", {
//         success: data?.success,
//         message: data?.message,
//         userRole: data?.data?.user?.role,
//         userId: data?.data?.user?._id
//       });

//       if (!response.ok || !data?.success) {
//         console.error("❌ Backend Google login failed:", data);
//         return false;
//       }

//       // Update user object with backend data
//       user.id = data.data.user._id;
//       user.firstName = data.data.user.firstName;
//       user.lastName = data.data.user.lastName;
//       user.email = data.data.user.email;
//       user.role = data.data.user.role;
//       user.profileImage = data.data.user.profileImage;
//       user.accessToken = data.data.accessToken;

//       console.log("✅ Google signIn successful!");
//       console.log("User created/updated:", {
//         id: user.id,
//         email: user.email,
//         role: user.role,
//         name: `${user.firstName} ${user.lastName}`
//       });

//       return true;
//     } catch (error) {
//       console.error("❌ Google signIn callback error:", error);
//       return false;
//     }
//   }
//   return true;
// },

//     // FIXED: Get URL from request headers
//     // async signIn({ user, account, req }) {
//     //   console.log("=== SIGNIN CALLBACK ===");
//     //   console.log("Account provider:", account?.provider);

//     //   if (account?.provider === "google") {
//     //     try {
//     //       let role = "player"; // Default role

//     //       // Method 1: Try to get role from sessionStorage (set in redirect callback)
//     //       if (typeof window !== "undefined") {
//     //         const storedRole = sessionStorage.getItem("google_signup_role");
//     //         if (storedRole && ["player", "gk", "coach", "admin"].includes(storedRole)) {
//     //           role = storedRole;
//     //           console.log("✅ Got role from sessionStorage:", role);
//     //           sessionStorage.removeItem("google_signup_role"); // Clean up
//     //         }
//     //       }

//     //       // Method 2: Try to get from req headers (server-side)
//     //       if (req) {
//     //         try {
//     //           // @ts-ignore - req might have headers
//     //           const referer = req.headers?.get("referer");
//     //           if (referer) {
//     //             const refererUrl = new URL(referer);
//     //             const roleFromReferer = refererUrl.searchParams.get("role");
//     //             if (roleFromReferer && ["player", "gk", "coach", "admin"].includes(roleFromReferer)) {
//     //               role = roleFromReferer;
//     //               console.log("✅ Got role from referer:", role);
//     //             }
//     //           }
//     //         } catch (error) {
//     //           console.log("Could not parse referer:", error);
//     //         }
//     //       }

//     //       console.log("📝 Final role to send to backend:", role);

//     //       // Call backend Google login endpoint
//     //       const response = await fetch(
//     //         `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google-login`,
//     //         {
//     //           method: "POST",
//     //           headers: {
//     //             "Content-Type": "application/json",
//     //           },
//     //           body: JSON.stringify({
//     //             idToken: account.id_token,
//     //             role: role,
//     //           }),
//     //         }
//     //       );

//     //       const data = await response.json();
//     //       console.log("Backend response:", data);

//     //       if (!response.ok || !data?.success) {
//     //         console.error("❌ Backend Google login failed:", data);
//     //         return false;
//     //       }

//     //       // Update user object with backend data
//     //       user.id = data.data.user._id;
//     //       user.firstName = data.data.user.firstName;
//     //       user.lastName = data.data.user.lastName;
//     //       user.email = data.data.user.email;
//     //       user.role = data.data.user.role;
//     //       user.profileImage = data.data.user.profileImage;
//     //       user.accessToken = data.data.accessToken;

//     //       console.log("✅ Google signIn successful!");
//     //       console.log("User role set to:", user.role);

//     //       return true;
//     //     } catch (error) {
//     //       console.error("❌ Google signIn callback error:", error);
//     //       return false;
//     //     }
//     //   }
//     //   return true;
//     // },
//   },

//   pages: {
//     signIn: "/login",
//     error: "/login",
//   },

//   // Enable debug logging
//   debug: true,
// };

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
