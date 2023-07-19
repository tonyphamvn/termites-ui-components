import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { LoadingButton } from "../components";
import { ThemeProvider, createTheme } from "../themes";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "LoadingButton",
  component: LoadingButton,
  tags: ["autodocs"],
} satisfies Meta<typeof LoadingButton>;

export default meta;
type Story = StoryObj<typeof LoadingButton>;

//👇 The ListTemplate construct will be spread to the existing stories.
const Template: Story = {
  render: ({ ...args }) => {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <div>
          <LoadingButton
            loading={true}
            size="small"
            style={{ marginRight: "14px" }}
            {...args}
          />
          <LoadingButton
            loading={true}
            size="medium"
            style={{ marginRight: "14px" }}
            {...args}
          />
          <LoadingButton loading={true} size="large" {...args} />
        </div>

        <div style={{ marginTop: "10px" }}>
          <LoadingButton
            loading={true}
            loadingPosition="end"
            size="small"
            style={{ marginRight: "14px" }}
            {...args}
          />
          <LoadingButton
            loading={true}
            loadingPosition="end"
            size="medium"
            style={{ marginRight: "14px" }}
            {...args}
          />
          <LoadingButton
            loadingPosition="end"
            loading={true}
            size="large"
            {...args}
          />
        </div>
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
