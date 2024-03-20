import { type ReactNode } from "react";
import { Popover } from "flowbite-react";

function FlowbiteCheck(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
      fill="none"
      viewBox="0 0 16 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.917 5.724 10.5 15 1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function FlowbiteCross(): ReactNode {
  return (
    <svg
      aria-hidden="true"
      className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
      fill="none"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function PasswordPopover({
  password: passwordAttempt,
  children,
}: {
  password: string;
  children: ReactNode;
}): ReactNode {
  let passwordLengthRangeBars: ReactNode;
  const passwordLength = passwordAttempt.length;
  if (passwordLength >= 12) {
    passwordLengthRangeBars = (
      <>
        <div className="h-1 bg-green-400 dark:bg-green-500" />
        <div className="h-1 bg-green-400 dark:bg-green-500" />
        <div className="h-1 bg-green-400 dark:bg-green-500" />
        <div className="h-1 bg-green-400 dark:bg-green-500" />
      </>
    );
  } else if (passwordLength >= 8) {
    passwordLengthRangeBars = (
      <>
        <div className="h-1 bg-green-400 dark:bg-green-500" />
        <div className="h-1 bg-green-400 dark:bg-green-500" />
        <div className="h-1 bg-green-400 dark:bg-green-500" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
      </>
    );
  } else if (passwordLength >= 6) {
    passwordLengthRangeBars = (
      <>
        <div className="h-1 bg-orange-300 dark:bg-orange-400" />
        <div className="h-1 bg-orange-300 dark:bg-orange-400" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
      </>
    );
  } else if (passwordLength >= 1) {
    passwordLengthRangeBars = (
      <>
        <div className="h-1 bg-red-400 dark:bg-red-500" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
      </>
    );
  } else {
    passwordLengthRangeBars = (
      <>
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
        <div className="h-1 bg-gray-200 dark:bg-gray-600" />
      </>
    );
  }

  const passwordHasUpperCase = /[A-Z]/.test(passwordAttempt);
  const passwordHasLowerCase = /[a-z]/.test(passwordAttempt);
  const passwordHasNumber = /[0-9]/.test(passwordAttempt);

  return (
    <Popover
      content={
        <div className="space-y-2 p-3">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Must have at least 6 characters!
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {passwordLengthRangeBars}
          </div>
          <p>Your password needs...</p>
          <ul>
            <li className="mb-1 flex items-center">
              {passwordHasUpperCase ? <FlowbiteCheck /> : <FlowbiteCross />}
              Upper case letters
            </li>
            <li className="mb-1 flex items-center">
              {passwordHasLowerCase ? <FlowbiteCheck /> : <FlowbiteCross />}
              Lower case letters
            </li>
            <li className="mb-1 flex items-center">
              {passwordHasNumber ? <FlowbiteCheck /> : <FlowbiteCross />}
              Numbers
            </li>
          </ul>
        </div>
      }
      trigger="hover"
    >
      {children}
    </Popover>
  );
}
