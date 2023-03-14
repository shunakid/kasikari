/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { theme } from 'themes'
import type { Responsive, ResponsiveProp } from 'types/styles'

// Themeのオブジェクトの型
export type AppTheme = typeof theme

// 各Themeのオブジェクトのキーのユニオン型
type SpaceThemeKeys = keyof typeof theme.space
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpacingThemeKeys = keyof typeof theme.letterSpacings
type LineHeightThemeKeys = keyof typeof theme.lineHeights

// 各Themeのユニオン型に任意の文字列を受け取れるようにした型
export type Space = SpaceThemeKeys | (string & {})
export type Color = ColorThemeKeys | (string & {})
export type FontSize = FontSizeThemeKeys | (string & {})
export type LetterSpacing = LetterSpacingThemeKeys | (string & {})
export type LineHeight = LineHeightThemeKeys | (string & {})

// 各Themeの重複しないユニークなキーをまとめた定数
const SPACE_KEYS = new Set([
  'margin',
  'margin-top',
  'margin-left',
  'margin-bottom',
  'margin-right',
  'padding',
  'padding-top',
  'padding-left',
  'padding-bottom',
  'padding-right',
])
const COLOR_KEYS = new Set(['color', 'background-color'])
const FONT_SIZE_KEYS = new Set(['font-size'])
const LINE_SPACING_KEYS = new Set(['letter-spacing'])
const LINE_HEIGHT_KEYS = new Set(['line-height'])

// レスポンシブデザインのためのブレイクポイントを定義している定数
const BREAKPOINTS: { [key: string]: string } = {
  sm: '640px', // 640px以上
  md: '768px', // 768px以上
  lg: '1024px', // 1024px以上
  xl: '1280px', // 1280px以上
}

/**
 * propKeyに応じたCSSプロパティの値を返す
 * @template T Responsiveオブジェクトの型
 * @param {string} propKey CSSプロパティのキー
 * @param {Responsive<T>} prop CSSプロパティの値。Responsiveオブジェクトか、T型の値。
 * @param {AppTheme} theme アプリのテーマオブジェクト。テーマ値が必要な場合に使用する。
 * @returns {string | undefined} CSSプロパティの値。Responsiveオブジェクトの場合は、メディアクエリを含む文字列を返す。
 */
export function toPropValue<T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: AppTheme,
) {
  // propがundefinedの場合はundefinedを返す
  if (prop === undefined) return undefined

  // propがResponsiveオブジェクトの場合
  if (isResponsivePropType(prop)) {
    const result = []
    for (const responsiveKey in prop) {
      if (responsiveKey === 'base') {
        // baseの場合は、メディアクエリを含まない単一のCSSプロパティの値を追加する
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme,
          )};`,
        )
      } else if (
        // sm, md, lg, xlの場合は、それぞれのメディアクエリを含むCSSプロパティの値を追加する
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ) {
        const breakpoint = BREAKPOINTS[responsiveKey]
        const style = `${propKey}: ${toThemeValueIfNeeded(
          propKey,
          prop[responsiveKey],
          theme,
        )};`
        result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`)
      }
    }
    // メディアクエリを含むCSSプロパティの値を改行で結合して返す
    return result.join('\n')
  }

  // Responsiveオブジェクトでない場合、単一のCSSプロパティの値を返す
  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`
}

/**
 * プロパティの値がテーマオブジェクトに含まれる場合は、テーマ値を返す。それ以外の場合は値をそのまま返す。
 * @template T プロパティの値の型
 * @param {string} propKey CSSプロパティのキー
 * @param {T} value プロパティの値
 * @param {AppTheme} theme アプリのテーマオブジェクト
 * @returns {T} プロパティの値またはテーマ値
 */
function toThemeValueIfNeeded<T>(propKey: string, value: T, theme?: AppTheme) {
  // spaceテーマキーの場合、valueがspaceテーマキーの場合は、テーマのspace値を返す
  if (
    theme &&
    theme.space &&
    SPACE_KEYS.has(propKey) &&
    isSpaceThemeKeys(value, theme)
  ) {
    return theme.space[value]
  } else if (
    // colorsテーマキーの場合、valueがcolorsテーマキーの場合は、テーマのcolors値を返す
    theme &&
    theme.colors &&
    COLOR_KEYS.has(propKey) &&
    isColorThemeKeys(value, theme)
  ) {
    return theme.colors[value]
  } else if (
    // fontSizesテーマキーの場合、valueがfontSizesテーマキーの場合は、テーマのfontSizes値を返す
    theme &&
    theme.fontSizes &&
    FONT_SIZE_KEYS.has(propKey) &&
    isFontSizeThemeKeys(value, theme)
  ) {
    return theme.fontSizes[value]
  } else if (
    // letterSpacingsテーマキーの場合、valueがletterSpacingsテーマキーの場合は、テーマのletterSpacings値を返す
    theme &&
    theme.letterSpacings &&
    LINE_SPACING_KEYS.has(propKey) &&
    isLetterSpacingThemeKeys(value, theme)
  ) {
    return theme.letterSpacings[value]
  } else if (
    // lineHeightsテーマキーの場合、valueがlineHeightsテーマキーの場合は、テーマのlineHeights値を返す
    theme &&
    theme.lineHeights &&
    LINE_HEIGHT_KEYS.has(propKey) &&
    isLineHeightThemeKeys(value, theme)
  ) {
    return theme.lineHeights[value]
  }

  // テーマオブジェクトに含まれない場合は、値をそのまま返す
  return value
}

/**
 * propがResponsivePropであるかどうかを判定する
 * @template T ResponsivePropの型
 * @param {any} prop 判定するプロパティ
 * @returns {prop is ResponsiveProp<T>} ResponsivePropの場合、trueを返す
 */
function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T> {
  // ResponsivePropの場合は、base、sm、md、lg、xlのいずれかのプロパティが存在する
  return (
    prop &&
    (prop.base !== undefined ||
      prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  )
}

/**
 * propがSpaceThemeKeysのいずれかであるかどうかを判定する
 * @param {any} prop 判定するプロパティ
 * @param {AppTheme} theme アプリのテーマオブジェクト
 * @returns {prop is SpaceThemeKeys} SpaceThemeKeysの場合、trueを返す
 */
function isSpaceThemeKeys(prop: any, theme: AppTheme): prop is SpaceThemeKeys {
  // themeのspaceキーにpropが含まれる場合、trueを返す
  return Object.keys(theme.space).filter((key) => key == prop).length > 0
}

/**
 * propがColorThemeKeysのいずれかであるかどうかを判定する
 * @param {any} prop 判定するプロパティ
 * @param {AppTheme} theme アプリのテーマオブジェクト
 * @returns {prop is ColorThemeKeys} ColorThemeKeysの場合、trueを返す
 */
function isColorThemeKeys(prop: any, theme: AppTheme): prop is ColorThemeKeys {
  // themeのcolorsキーにpropが含まれる場合、trueを返す
  return Object.keys(theme.colors).filter((key) => key == prop).length > 0
}

/**
 * propがFontSizeThemeKeysのいずれかであるかどうかを判定する
 * @param {any} prop 判定するプロパティ
 * @param {AppTheme} theme アプリのテーマオブジェクト
 * @returns {prop is FontSizeThemeKeys} FontSizeThemeKeysの場合、trueを返す
 */
function isFontSizeThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is FontSizeThemeKeys {
  // themeのfontSizesキーにpropが含まれる場合、trueを返す
  return Object.keys(theme.fontSizes).filter((key) => key == prop).length > 0
}

/**
 * propがLetterSpacingThemeKeysのいずれかであるかどうかを判定する
 * @param {any} prop 判定するプロパティ
 * @param {AppTheme} theme アプリのテーマオブジェクト
 * @returns {prop is LetterSpacingThemeKeys} LetterSpacingThemeKeysの場合、trueを返す
 */
function isLetterSpacingThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is LetterSpacingThemeKeys {
  // themeのletterSpacingsキーにpropが含まれる場合、trueを返す
  return (
    Object.keys(theme.letterSpacings).filter((key) => key == prop).length > 0
  )
}

/**
 * propがLineHeightThemeKeysのいずれかであるかどうかを判定する
 * @param {any} prop 判定するプロパティ
 * @param {AppTheme} theme アプリのテーマオブジェクト
 * @returns {prop is LineHeightThemeKeys} LineHeightThemeKeysの場合、trueを返す
 */
function isLineHeightThemeKeys(
  prop: any,
  theme: AppTheme,
): prop is LineHeightThemeKeys {
  // themeのlineHeightsキーにpropが含まれる場合、trueを返す
  return Object.keys(theme.lineHeights).filter((key) => key == prop).length > 0
}
