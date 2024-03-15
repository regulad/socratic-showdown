import { type ReactNode } from "react";
import PromptIsolationSpace from "../../ui/prompt-isolation-space";
import SignupForm from "./signup-form";

export const metadata = {
  title: "Sign Up",
};

export default function Page(): ReactNode {
  return (
    <PromptIsolationSpace subheading="Sign up for a new account">
      <SignupForm />
    </PromptIsolationSpace>
  );
}
