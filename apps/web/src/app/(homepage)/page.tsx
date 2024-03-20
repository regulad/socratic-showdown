import { type ReactNode } from "react";

export default function Page(): ReactNode {
  return (
    <section>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Gamify
        </span>{" "}
        your classroom discussions.
      </h1>
    </section>
  );
}
