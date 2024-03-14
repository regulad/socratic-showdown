"use client";

import {ChildProps} from "../ui/types";

export default function ContextProvider({ children }: ChildProps) {
  return (
    <>
      {children}
    </>
  )
}