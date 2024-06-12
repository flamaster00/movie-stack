import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
const textLorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aperiam architecto atque aut consectetur cum dicta, ducimus eius ex laudantium nemo obcaecati repudiandae ullam unde. Aspernatur consequatur cumque deserunt eius explicabo mollitia porro quaerat quia quis sunt. Amet blanditiis corporis doloremque dolorum eius id, illo ipsa ipsam libero maiores minima minus molestias nobis nulla odio placeat, quam quia, quidem repellat sapiente tempore voluptates voluptatum. Consectetur dignissimos est facilis inventore nam vitae voluptate. Accusamus consectetur cum cumque deleniti deserunt dolorem doloribus, esse est illo ipsa, iste modi numquam obcaecati placeat possimus provident recusandae reiciendis similique totam unde velit voluptatem voluptates.';

export const ModalOpen = Template.bind({});
ModalOpen.args = {
  isOpen: true,
  children: textLorem,
};
