import PresentationalAvatar from './PresentationalAvatar.vue';
import type { Meta } from '@storybook/vue3';
import { faker } from '@faker-js/faker';

const meta: Meta<typeof PresentationalAvatar> = {
  component: PresentationalAvatar
};

export default meta;

const avatarSizes: InstanceType<
  typeof PresentationalAvatar
>['$props']['size'][] = ['sm', 'md', 'custom'];

export const Presentation = () => (
  <div class="flex flex-col gap-5">
    {avatarSizes.map((size) => {
      if (size === 'custom') {
        return (
          <div class="flex gap-5">
            <PresentationalAvatar
              class="text-2xl w-[100px]"
              size={size}
              username="JohnDoe"
            />
            <PresentationalAvatar
              class="text-2xl w-[100px]"
              size={size}
              username="JohnDoe"
              image={faker.image.avatar()}
            />
          </div>
        );
      }
      return (
        <div class="flex gap-5">
          <PresentationalAvatar size={size} username="JohnDoe" />
          <PresentationalAvatar
            size={size}
            username="JohnDoe"
            image={faker.image.avatar()}
          />
        </div>
      );
    })}
  </div>
);
