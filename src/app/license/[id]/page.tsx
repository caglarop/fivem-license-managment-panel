import PageClient from "./page.client";

export default function Page({ params }: { params: { id: string } }) {
  return <PageClient params={params} />;
}
