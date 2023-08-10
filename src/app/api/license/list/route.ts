import { prisma } from "@web/lib/prisma";
import { authOptions } from "@web/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return NextResponse.json({});
  }

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({});
  }

  const licenses = await prisma.license.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      product: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return NextResponse.json({
    licenses,
  });
};

export { handler as GET };
