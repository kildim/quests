import { } from 'styled-components';
import { appTheme } from '../app/common';
declare module 'styled-components' {
  type Theme = typeof appTheme;
  export interface DefaultTheme extends Theme { }
}