import { authOptions } from "@web/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// GET: /api/session
export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "NOT_LOGGED_IN" }), {
      status: 401,
    });
  }

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
