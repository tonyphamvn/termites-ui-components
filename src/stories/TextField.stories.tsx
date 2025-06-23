import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "../components/TextField";
import { ThemeProvider, createTheme } from "../themes";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "TextField",
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

//👇 The ListTemplate construct will be spread to the existing stories.
const Template: Story = {
  render: ({ ...args }) => {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <TextField {...args} />
      </ThemeProvider>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  ...Template,
  args: {
    style: {
      padding: 0,
    },
  },
};

export const TextFieldError: Story = {
  ...Template,
  args: {
    error: true,
  },
};
