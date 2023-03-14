/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Responsive } from 'types/styles'
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
} from 'utils/styles'

/**
 * ボタンの種類を表す列挙型
 */
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

/**
 * ボタンのプロパティ
 */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant // ボタンの種類
  fontSize?: Responsive<FontSize> // フォントサイズ
  fontWeight?: Responsive<string> // フォントウェイト
  letterSpacing?: Responsive<LetterSpacing> // 文字間隔
  lineHeight?: Responsive<LineHeight> // 行の高さ
  textAlign?: Responsive<string> // テキストの配置
  color?: Responsive<Color> // テキストの色
  backgroundColor?: Responsive<Color> // 背景色
  width?: Responsive<string> // 幅
  height?: Responsive<string> // 高さ
  minWidth?: Responsive<string> // 最小幅
  minHeight?: Responsive<string> // 最小高さ
  display?: Responsive<string> // 表示設定
  border?: Responsive<string> // ボーダー
  overflow?: Responsive<string> // オーバーフロー
  margin?: Responsive<Space> // マージン
  marginTop?: Responsive<Space> // 上側のマージン
  marginRight?: Responsive<Space> // 右側のマージン
  marginBottom?: Responsive<Space> // 下側のマージン
  marginLeft?: Responsive<Space> // 左側のマージン
  padding?: Responsive<Space> // パディング
  paddingTop?: Responsive<Space> // 上側のパディング
  paddingRight?: Responsive<Space> // 右側のパディング
  paddingBottom?: Responsive<Space> // 下側のパディング
  paddingLeft?: Responsive<Space> // 左側のパディング
  pseudoClass?: {
    // 擬似クラス
    hover?: {
      // ホバー時のスタイル
      backgroundColor?: Responsive<Color> // 背景色
    }
    disabled?: {
      // 無効化時のスタイル
      backgroundColor?: Responsive<Color> // 背景色
    }
  }
}

/**
 * ボタンの種類ごとのスタイルを定義したオブジェクト
 */
const variants = {
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'primaryDark',
      },
      disabled: {
        backgroundColor: 'primary',
      },
    },
  },
  secondary: {
    color: 'white',
    backgroundColor: 'secondary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'secondaryDark',
      },
      disabled: {
        backgroundColor: 'secondary',
      },
    },
  },
  danger: {
    color: 'white',
    backgroundColor: 'danger',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'dangerDark',
      },
      disabled: {
        backgroundColor: 'danger',
      },
    },
  },
}

// Styled ComponentsのButtonコンポーネント
const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    // variantがtruthyで、variantsオブジェクトにvariantが存在する場合
    if (variant && variants[variant]) {
      const styles = []
      // colorがない場合、variantsからcolorを取得し、スタイルを生成する
      !color &&
        styles.push(toPropValue('color', variants[variant].color, theme))
      // backgroundColorがない場合、variantsからbackgroundColorを取得し、スタイルを生成する
      !backgroundColor &&
        styles.push(
          toPropValue(
            'background-color',
            variants[variant].backgroundColor,
            theme,
          ),
        )
      // pseudoClassがない場合、hoverとdisabledのスタイルを生成する
      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toPropValue(
              'background-color',
              variants[variant].pseudoClass.hover.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        )
      !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toPropValue(
              'background-color',
              variants[variant].pseudoClass.disabled.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        )
      return styles.join('\n')
    }
  }}

  ${(props) => toPropValue('font-size', props.fontSize, props.theme)}
  ${(props) => toPropValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => toPropValue('line-height', props.lineHeight, props.theme)}
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) =>
    toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width, props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}

  &:hover {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.hover?.backgroundColor,
      )}
  }

  &:disabled {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor,
      )}
  }

  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-radius: 4px;
  border: none;
`

// Buttonコンポーネントのデフォルトpropsを定義する
Button.defaultProps = {
  variant: 'primary', // ボタンの種類をprimaryに設定する
  paddingLeft: 2, // 左側のパディングを2に設定する
  paddingRight: 2, // 右側のパディングを2に設定する
  paddingTop: 1, // 上側のパディングを1に設定する
  paddingBottom: 1, // 下側のパディングを1に設定する
  color: 'white', // ボタンのテキスト色を白に設定する
  display: 'inline-block', // ボタンの表示方法をinline-blockに設定する
  textAlign: 'center', // テキストの水平方向の揃え方を中央揃えに設定する
  lineHeight: 'inherit', // 行の高さを親要素から継承するように設定する
  fontSize: 'inherit', // フォントサイズを親要素から継承するように設定する
}

export default Button
