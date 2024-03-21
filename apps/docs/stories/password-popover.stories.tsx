import type { Meta, StoryObj } from "@storybook/react";
import PasswordPopover from "@repo/ui/password-popover";
import { Button } from "flowbite-react";

const meta: Meta<typeof PasswordPopover> = {
  component: PasswordPopover,
  argTypes: {
    password: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordPopover>;

export const Primary: Story = {
  render: (props) => (
    //center the button
    <div className="h-screen flex items-center justify-center bg-gray-300 dark:bg-gray-800">
      <PasswordPopover {...props}>
        <Button disabled>Input</Button>
      </PasswordPopover>
    </div>
  ),
  name: "PasswordPopover",
  args: {
    password: "password",
  },
};
