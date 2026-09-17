import { createAuthOptions } from "@/lib/auth";
import NextAuth from "next-auth";
import { NextRequest } from "next/server";

type AuthRouteContext = { params: { nextauth: string[] } };

function handler(request: NextRequest, context: AuthRouteContext) {
  return NextAuth(request, context, createAuthOptions());
}

export { handler as GET, handler as POST };
