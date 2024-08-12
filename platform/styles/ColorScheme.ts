import { COLORS } from './Colors';
import { ColorSchemeType } from './types/ColorScheme.types';

export const ColorScheme = {
  // brand scheme
  'brand-primary': COLORS['blue500'],
  'brand-secondary': COLORS['blue500'],

  // background scheme
  'bg-primary': COLORS['white'],
} satisfies ColorSchemeType;
