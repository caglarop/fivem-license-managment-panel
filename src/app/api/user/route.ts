import { prisma } from "@web/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest) => {
  const userId = req.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({});
  }

  const user = await prisma.user.findFirst({
    where: { id: userId as string },
  });

  if (!user) {
    return NextResponse.json({});
  }

  return NextResponse.json({
    id: user?.id,
    email: user?.email,
    isSuperAdmin: user?.isSuperAdmin || false,
    name: user?.name,
    image: user?.image,
  });
};

export { handler as GET, handler as POST };
