import { authOptions } from "@web/lib/auth";
import { prisma } from "@web/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

// /api/license/[id]
const handler = async (req: NextRequest, { params }: { params: Params }) => {
  // Check method
  if (req.method !== "GET") {
    return NextResponse.json(null);
  }

  // Getting parameters
  const { id } = params;

  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(null);
  }

  // Getting license
  const license = await prisma.license.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
    include: {
      product: {
        select: {
          id: true,
          name: true,
        },
      },
      user: {
        select: {
          id: true,
        },
      },
    },
  });

  // Send response
  return NextResponse.json(license || null);
};

export { handler as GET };
