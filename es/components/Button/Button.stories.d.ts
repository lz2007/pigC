import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ primary, size, backgroundColor, label, ...props }: import("./Button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Large: Story;
export declare const Small: Story;
