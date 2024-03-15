"use client";

import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
// eslint-disable-next-line import/named -- weird bug
import { useFormState } from "react-dom";
import { type ReactNode } from "react";
import { login, type LoginState } from "./actions";

const initialState = { message: null, errors: {} } satisfies LoginState;

export default function LoginForm(): ReactNode {
  const [state, dispatch] = useFormState(login, initialState);

  return (
    <form
      action={dispatch}
      aria-describedby="overall-error"
      className="flex max-w-md flex-col gap-4"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          aria-describedby="email-error"
          color={state.errors?.email ? "failure" : undefined}
          id="email1"
          name="email"
          placeholder="name@domain.com"
          required
          type="email"
        />
        <div aria-atomic="true" aria-live="polite" id="email-error">
          {state.errors?.email?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          aria-describedby="password-error"
          color={state.errors?.password ? "failure" : undefined}
          id="password1"
          name="password"
          required
          type="password"
        />
        <div aria-atomic="true" aria-live="polite" id="password-error">
          {state.errors?.password?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
      <Button type="submit">Submit</Button>
      <div aria-atomic="true" aria-live="polite" id="overall-error">
        {state.message ? (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        ) : null}
      </div>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          href="/signup"
        >
          Sign up!
        </Link>
      </p>
    </form>
  );
}
