import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";
import { ThemeProvider, createTheme } from "../themes";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

//👇 The ListTemplate construct will be spread to the existing stories.
const Template: Story = {
  render: ({ ...args }) => {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <Button
          size="small"
          style={{
            ":hover": {
              color: "#000",
            },
          }}
          {...args}
        />
        <Button
          size="medium"
          variant="contained"
          {...args}
        />
        <Button size="large" variant="outlined" {...args} />
      </ThemeProvider>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  ...Template,
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    color: "secondary",
    label: "Button",
  },
};

export const Error: Story = {
  ...Template,
  args: {
    color: "error",
    label: "Button",
  },
};

export const Warning: Story = {
  ...Template,
  args: {
    color: "warning",
    label: "Button",
  },
};

export const Info: Story = {
  ...Template,
  args: {
    color: "info",
    label: "Button",
  },
};

export const Success: Story = {
  ...Template,
  args: {
    color: "success",
    label: "Button",
  },
};
