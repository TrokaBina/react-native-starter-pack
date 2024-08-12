import { config } from '@tamagui/config/v3';
import { createTamagui, createTokens } from '@tamagui/core'; // or '@tamagui/core'
import { ColorScheme } from './platform/styles/ColorScheme';

const tokens = createTokens({
  ...config.tokens,
  // space: {
  //   ...config.tokens.space,
  //   sm: 8,
  //   md: 16,
  //   lg: 24,
  // },
  // radius: {
  //   ...config.tokens.radius,
  //   sm: 8,
  //   md: 16,
  //   lg: 24,
  // },
  color: {
    ...ColorScheme,
  },
  zIndex: {},
});

const appConfig = createTamagui({ ...config, tokens });

export type AppConfig = typeof appConfig;

declare module '@tamagui/core' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  //   interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
