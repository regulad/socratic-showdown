"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
// eslint-disable-next-line import/named -- weird bug
import { useFormState } from "react-dom";
import { type ReactNode, useState } from "react";
import PasswordPopover from "../../ui/flowbite/password-popover";
import { signup, type SignupState } from "./actions";

const initialState = { message: null, errors: {} } satisfies SignupState;

// https://www.flowbite-react.com/docs/components/popover#password-strength
export default function SignupForm(): ReactNode {
  const [state, dispatch] = useFormState(signup, initialState);

  const [passwordAttempt, setPasswordAttempt] = useState("");

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
        <PasswordPopover password={passwordAttempt}>
          <TextInput
            aria-describedby="password-error"
            color={state.errors?.password ? "failure" : undefined}
            id="password1"
            name="password"
            onChange={(e) => {
              setPasswordAttempt(e.target.value);
            }}
            required
            type="password"
          />
        </PasswordPopover>
        <div aria-atomic="true" aria-live="polite" id="password-error">
          {state.errors?.password?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Confirm password" />
        </div>
        <TextInput
          aria-describedby="password2-error"
          color={state.errors?.password2 ? "failure" : undefined}
          id="password2"
          name="password2"
          required
          type="password"
        />
        <div aria-atomic="true" aria-live="polite" id="password2-error">
          {state.errors?.password2?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
      {/* Agree to terms */}
      <div className="flex items-center">
        <Checkbox
          aria-describedby="terms-error"
          id="terms"
          name="terms"
          required
        />
        &nbsp;
        <Label htmlFor="terms" value="I agree to the terms and conditions" />
        {state.errors?.terms ? (
          <p className="mt-2 text-sm text-red-500" id="terms-error">
            {state.errors.terms}
          </p>
        ) : null}
      </div>
      <Button type="submit">Submit</Button>
      <div aria-atomic="true" aria-live="polite" id="overall-error">
        {state.message ? (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        ) : null}
      </div>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          href="/login"
        >
          Sign in!
        </Link>
      </p>
    </form>
  );
}
