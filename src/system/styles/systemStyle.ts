import * as CSS from 'csstype';
import { CSSProperties } from 'react';

export type StandardCSSProperties = CSS.PropertiesFallback<number | string>;

export interface AllSystemCSSProperties
  extends Omit<StandardCSSProperties, 'bg'> { }

export type ResponsiveStyleValue<T> = T | Array<T | null> | { [key: string]: T | null };

export type SystemCssProperties<Theme extends object = {}> = {
  [K in keyof AllSystemCSSProperties]:
  | ResponsiveStyleValue<AllSystemCSSProperties[K]>
  | ((theme: Theme) => ResponsiveStyleValue<AllSystemCSSProperties[K]>)
  | SystemStyleObject<Theme>;
};

/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...).
 */
export type CSSPseudoSelectorProps<Theme extends object = {}> = {
  [K in CSS.Pseudos]?: ((theme: Theme) => SystemStyleObject<Theme>) | SystemStyleObject<Theme>;
};

type CssVariableType = string | number;

/**
 * Map all nested selectors and CSS variables.
 */
export interface CSSSelectorObjectOrCssVariables<Theme extends object = {}> {
  [cssSelectorOrVariable: string]:
  | ((theme: Theme) => SystemStyleObject<Theme> | string | number)
  | SystemStyleObject<Theme>
  | CssVariableType;
}

export type SystemStyleObject<Theme extends object = {}> =
  | SystemCssProperties<Theme>
  | CSSPseudoSelectorProps<Theme>
  | CSSSelectorObjectOrCssVariables<Theme>
  | null;

/**
 * The `SxProps` can be either object or function
 */
export type SxProps<Theme extends object = {}> =
  | SystemStyleObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>)
  | ReadonlyArray<
    boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)
  >;