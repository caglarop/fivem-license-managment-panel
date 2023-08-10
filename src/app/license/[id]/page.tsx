"use client";

import { Prisma } from "@prisma/client";
import { SquadButtonLink } from "@web/components/buttons/SquadButtonLink";
import { SquareUpLeftIcon } from "@web/components/icons/SquareUpLeftIcon";
import { DefaultLayout } from "@web/components/layouts/DefaultLayout";
import { IpAddressSchema } from "@web/schema/IpAddress";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type LicenseWithUserAndProduct = Prisma.LicenseGetPayload<{
  include: {
    product: { select: { id: true; name: true } };
    user: { select: { id: true } };
  };
}>;

export default function Page({ params }: { params: { id: string } }) {
  const { status } = useSession();

  const [data, setData] = useState<LicenseWithUserAndProduct | null>(null);

  const [isLoading, setLoading] = useState(true);

  const [isFormLoading, setFormLoading] = useState(false);
  const [ipAddress, setIpAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data || isFormLoading) {
      return;
    }

    setFormLoading(true);
    setError(null);
    setSuccessMessage(null);

    // Validate IP Address using Zod schema
    try {
      IpAddressSchema.parse(ipAddress);

      const res = await fetch(`/api/license/update/ip/${params.id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ipAddress,
        }),
      }).then((r) => r.json());

      if (res?.success) {
        setSuccessMessage("IP Address updated successfully!");

        if (res?.license) {
          if (data) {
            setData({ ...data, ...res.license });
          } else {
            setData({ ...res.license });
          }
        }
      } else {
        if (res?.message === "24H_LOCK") {
          const remainingMinutes = res?.maxMinutes - res?.minutesSinceUpdate;

          setError(
            `You have ${remainingMinutes} minutes left before you can perform this action again.`
          );
        } else {
          setError(res?.message || "Unknown error!");
        }
      }
    } catch (error) {
      setError("Unknown error!");
    } finally {
      setFormLoading(false);
    }
  };

  useEffect(() => {
    if (status !== "loading" && status === "unauthenticated") {
      window.location.href = "/";
    }

    (async () => {
      const res = await fetch(`/api/license/${params.id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }).then((r) => r.json());

      if (res) {
        setData(res);
      }

      setLoading(false);
    })();
  }, [status, params]);

  if (status === "loading" || status === "unauthenticated") {
    return <></>;
  }

  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 items-center">
          <h1 className="flex-1 text-xl font-seibold">Edit</h1>

          <div className="">
            <SquadButtonLink href="/license">
              <SquareUpLeftIcon />
            </SquadButtonLink>
          </div>
        </div>

        {isLoading && <span>Loading...</span>}
        {!isLoading && data && (
          <form onSubmit={handleFormSubmit} className="mt-4">
            {/* Display Product Name */}
            <div className="mb-4">
              <label className="block font-medium">Product Name</label>
              <p>{data?.product?.name}</p>
            </div>
            {/* Display License Key */}
            <div className="mb-4">
              <label className="block font-medium">License Key</label>
              <p>{data?.key}</p>
            </div>
            {/* Display IP Address */}
            <div className="mb-4 max-w-xl">
              <label htmlFor="ipAddress" className="block font-medium">
                IP Address
              </label>
              <input
                type="text"
                id="ipAddress"
                value={ipAddress}
                placeholder={data?.ipAddress || ""}
                onChange={(e) => setIpAddress(e.target.value)}
                className={`border rounded-md p-2 w-full text-black ${
                  error ? "border-red-500" : ""
                }`}
                disabled={isFormLoading}
              />
              {error && <p className="text-red-500 mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
                isFormLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isFormLoading}
            >
              {isFormLoading ? "Loading..." : "Save"}
            </button>

            {successMessage && (
              <p className="text-green-500 mt-2">{successMessage}</p>
            )}
          </form>
        )}
      </div>
    </DefaultLayout>
  );
}
