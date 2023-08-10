import { prisma } from "@web/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  licenseKey: string;
  productName: string;
}

// /api/license/[productName]/[licenseKey]
const handler = async (req: NextRequest, { params }: { params: Params }) => {
  let allowed = false;

  // Check method
  if (req.method !== "GET") {
    return NextResponse.json({ allowed });
  }

  // Getting parameters
  const { licenseKey, productName } = params;

  // Check product exists
  const product = await prisma.product.findFirst({
    where: {
      name: productName,
    },
  });

  if (!product) {
    return NextResponse.json({ allowed: false });
  }

  // Getting license
  const license = await prisma.license.findFirst({
    where: {
      key: licenseKey,
      productId: product.id,
    },
  });

  // Getting ip address from visitor
  const ip =
    req.ip ||
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for");

  // Check ip address are correct
  if (license?.ipAddress === ip || req.url.indexOf("http://localhost") !== -1) {
    allowed = true;
  }

  // Send response
  return NextResponse.json({ allowed });
};

export { handler as GET };
