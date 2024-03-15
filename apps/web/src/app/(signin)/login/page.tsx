import { type ReactNode } from "react";
import PromptIsolationSpace from "../../ui/prompt-isolation-space";
import LoginForm from "./login-form";

export const metadata = {
  title: "Login",
};

export default function Component(): ReactNode {
  return (
    <PromptIsolationSpace subheading="Sign into your account">
      <LoginForm />
    </PromptIsolationSpace>
  );
}
