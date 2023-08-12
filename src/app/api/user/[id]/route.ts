import { prisma } from "@web/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  userId: string;
}

// /api/license/[productName]/[licenseKey]
const handler = async (req: NextRequest, { params }: { params: Params }) => {
  // Check method
  if (req.method !== "GET") {
    return NextResponse.json({});
  }

  // Getting parameters
  const { userId } = params;

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

export { handler as GET };
