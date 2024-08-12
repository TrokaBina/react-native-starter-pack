import { styled, withStaticProperties } from '@tamagui/core';
import { View } from 'react-native';
import { ButtonContext } from './ButtonContext';
import { ButtonText } from './ButtonText';

const ButtonFrame = styled(View, {
  name: 'Button',
  context: ButtonContext,
  backgroundColor: '$background',
  alignItems: 'center',
  flexDirection: 'row',
  padding: 12,
  alignSelf: 'flex-start',
  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
        };
      },
    },
  } as const,
});

export const Button = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Props: ButtonContext.Provider,
});
