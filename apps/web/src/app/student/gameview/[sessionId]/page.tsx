import { type ReactNode } from "react";

export default function Page({
  params,
}: {
  params: { sessionId: string };
}): ReactNode {
  return <p>{params.sessionId}</p>;
}
