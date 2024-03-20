// https://flowbite.com/blocks/marketing/login/#default-login-page
import React, { type ReactNode } from "react";
import { Card } from "flowbite-react";
import Link from "next/link";

export default function PromptIsolationSpace({
  children,
  subheading,
}: {
  children?: React.ReactNode;
  subheading?: string;
}): ReactNode {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <Link
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          href="/"
        >
          SocraTalk
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <Card className="space-y-4 md:space-y-6">
            {subheading ? (
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {subheading}
              </h1>
            ) : null}
            {children}
          </Card>
        </div>
      </div>
    </section>
  );
}
