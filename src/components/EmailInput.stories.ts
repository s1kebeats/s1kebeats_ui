import EmailInput from './EmailInput.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof EmailInput> = {
  component: EmailInput
};

export default meta;

type Story = StoryObj<typeof EmailInput>;

export const Primary: Story = {
  render: (args) => ({
    components: {
      EmailInput
    },
    setup() {
      return {
        args
      };
    },
    template: `
    <div class="flex flex-col gap-5">
        <EmailInput v-bind="args" />
    </div>
    `
  }),
  args: {
    name: 'email'
  }
};
