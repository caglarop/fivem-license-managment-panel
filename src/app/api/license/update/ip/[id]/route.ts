import { prisma } from "@web/lib/prisma";
import { authOptions } from "@web/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { calculateMinutesSinceUpdate } from "@web/utils/utils";
import { IpAddressSchema } from "@web/schema/IpAddress";

interface Params {
  id: string;
}

const handler = async (req: NextRequest, { params }: { params: Params }) => {
  if (req.method !== "POST") {
    return NextResponse.json({});
  }

  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ success: false, message: "FORBIDDEN" });
  }

  // Getting parameters
  const { id } = params;

  const body = await req.json();

  if (!id) {
    return NextResponse.json({ success: false, message: "BAD_REQUEST" });
  }

  const { ipAddress } = body;

  if (!ipAddress) {
    return NextResponse.json({ success: false, message: "INVALID_IP_ADDR" });
  }

  if (!IpAddressSchema.safeParse(ipAddress).success) {
    return NextResponse.json({ success: false, message: "INVALID_IP_ADDR" });
  }

  const license = await prisma.license.findFirst({
    where: {
      userId: session.user.id,
      id,
    },
  });

  if (!license) {
    return NextResponse.json({});
  }

  const minutesSinceUpdate = calculateMinutesSinceUpdate(license.updatedAt);

  // Check if it has been more than X minutes
  const maxMinutes = 60 * 24;

  if (minutesSinceUpdate < maxMinutes) {
    return NextResponse.json({
      success: false,
      message: "24H_LOCK",
      minutesSinceUpdate,
      maxMinutes,
    });
  }

  const updatedLicense = await prisma.license.update({
    where: {
      id: license.id,
    },
    data: {
      ipAddress,
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

  if (!updatedLicense) {
    return NextResponse.json({});
  }

  return NextResponse.json({
    success: true,
    license: updatedLicense,
  });
};

export { handler as POST };
