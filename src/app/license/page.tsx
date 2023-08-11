"use client";

import { Prisma } from "@prisma/client";
import { SquadButtonLink } from "@web/components/buttons/SquadButtonLink";
import { SettingIcon } from "@web/components/icons/SettingIcon";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type LicenseWithProduct = Prisma.LicenseGetPayload<{
  include: {
    product: { select: { id: true; name: true } };
  };
}>;

export default function Page() {
  const { status } = useSession();

  const [data, setData] = useState<any>(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== "loading" && status === "unauthenticated") {
      window.location.href = "/";
    }

    (async () => {
      const res = await fetch("/api/license/list", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }).then((r) => r.json());

      if (res && res.licenses) {
        setData({ licenses: res.licenses });
      }

      setLoading(false);
    })();
  }, [status]);

  if (status === "loading" || status === "unauthenticated") {
    return <></>;
  }

  return (
    <div>
      <h1 className="text-xl font-seibold">Licenses</h1>

      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="grid gap-4 my-4">
          {data && data.licenses.length > 0 && (
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase bg-white/20">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Script
                    </th>
                    <th scope="col" className="px-6 py-3">
                      IP Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      License Key
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.licenses.map((lic: LicenseWithProduct, i: number) => (
                    <tr
                      key={i}
                      className="bg-white/5 border-b border-white/5 hover:bg-white/10"
                    >
                      <th scope="row" className="px-6 py-4">
                        {lic.product?.name}
                      </th>
                      <td className="px-6 py-4">{lic.ipAddress}</td>
                      <td className="px-6 py-4">{lic.key}</td>
                      <td className="px-6 py-4 flex gap-4 justify-end">
                        <SquadButtonLink href={`/license/${lic.id}`}>
                          <SettingIcon />
                        </SquadButtonLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
