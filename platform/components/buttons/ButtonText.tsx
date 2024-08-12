import { Text, styled } from '@tamagui/core';
import { ButtonContext } from './ButtonContext';

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  color: '$color',
  context: ButtonContext,
  userSelect: 'none',
  // variants: {
  //   size: {
  //     '...fontSize': (name, { font }) => ({
  //       fontSize: font?.size[name],
  //     }),
  //   },
  // } as const,
});
