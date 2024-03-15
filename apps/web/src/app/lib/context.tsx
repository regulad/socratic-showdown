"use client";

import { type ReactNode } from "react";

export default function ContextProvider({
  children,
}: {
  children?: ReactNode;
}): ReactNode {
  return <>{children}</>;
}
