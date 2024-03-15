import { type ReactNode } from "react";

export default function Page({
  params,
}: {
  params: { sessionId: string };
}): ReactNode {
  return (
    <div>
      <h1>Session: {params.sessionId}</h1>
    </div>
  );
}
