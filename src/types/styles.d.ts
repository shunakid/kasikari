/* eslint-disable @typescript-eslint/ban-types */

/**
 * レスポンシブデザインを実現するためのプロパティを表すジェネリック
 * base: プロパティの基本値
 * sm: 640px以上の画面サイズに対するプロパティの値
 * md: 768px以上の画面サイズに対するプロパティの値
 * lg: 1024px以上の画面サイズに対するプロパティの値
 * xl: 1280px以上の画面サイズに対するプロパティの値
 */
export type ResponsiveProp<T> = {
  base?: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
}

/**
 * レスポンシブデザインに対応するためのプロパティの値を表す型
 * T型: プロパティの値
 * ResponsiveProp<T>型: レスポンシブデザインに対応したプロパティの値
 */
export type Responsive<T> = T | ResponsiveProp<T>

/**
 * Flex
 */

/**
 * flexコンテナ内でアイテムの垂直方向の配置を表す型
 * center: 縦方向の中央揃え
 * end: 縦方向の右揃え
 * flex-end: 縦方向の下揃え
 * flex-start: 縦方向の上揃え
 * self-end: アイテム自身を縦方向の下揃え
 * self-start: アイテム自身を縦方向の上揃え
 * start: 縦方向の左揃え
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

/**
 * flexコンテナ内でアイテムの水平方向の配置を表す型
 * center: 水平方向の中央揃え
 * end: 水平方向の右揃え
 * flex-end: 水平方向の右揃え
 * flex-start: 水平方向の左揃え
 * start: 水平方向の左揃え
 */
type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

/**
 * flexコンテナ内でアイテムの間隔を表す型
 * space-around: アイテムの周りに余白を付け、アイテム間のスペースを均等に分配
 * space-between: アイテム間のスペースを均等に分配し、両端には余白を付けない
 * space-evenly: アイテム間のスペースを均等に分配し、両端にも余白を付ける
 * stretch: アイテムの幅を伸ばし、行全体を広げる
 */
type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

/**
 * CSSプロパティに対するグローバル値を表す型
 * -moz-initial: Mozilla Firefoxの初期値
 * inherit: 親要素から継承された値
 * initial: ブラウザの初期値
 * revert: 親要素から継承された値、またはブラウザの初期値
 * unset: 親要素から継承された値を使用し、それがない場合はブラウザの初期値
 */
type CSSPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

/**
 * flexコンテナ内でアイテムを縦方向に配置するためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * SelfPosition型: flexアイテム自身の縦方向の配置方法
 * baseline: アイテムのベースラインに合わせて縦方向に揃える
 * normal: 通常の配置
 * stretch: flexアイテムを伸縮させ、flexコンテナの高さに合わせる
 * string型: コードの自動補完
 */
export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {})

/**
 * flexコンテナ内で複数行のアイテムの配置を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * ContentDistribution型: アイテムの間隔を表す型
 * center: アイテムを中央に揃える
 * end: アイテムを右端に揃える
 * flex-end: アイテムを右端に揃える
 * flex-start: アイテムを左端に揃える
 * start: アイテムを左端に揃える
 * baseline: アイテムのベースラインに合わせて縦方向に揃える
 * normal: 通常の配置
 * string型: コードの自動補完
 */
export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  | (string & {})

/**
 * flexコンテナ内でアイテムを横方向に配置するためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * SelfPosition型: flexアイテム自身の横方向の配置方法
 * baseline: アイテムのベースラインに合わせて横方向に揃える
 * left: アイテムを左端に揃える
 * legacy: 旧来のブラウザに対する互換性のための設定
 * normal: 通常の配置
 * right: アイテムを右端に揃える
 * stretch: flexアイテムを伸縮させ、flexコンテナの幅に合わせる
 * string型: コードの自動補完
 */
export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

/**
 * flexコンテナ内でアイテムの横方向の間隔を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * ContentDistribution型: アイテムの間隔を表す型
 * ContentPosition型: アイテムの横方向の配置方法
 * left: アイテムを左端に揃える
 * normal: 通常の配置
 * right: アイテムを右端に揃える
 * string型: コードの自動補完
 */
export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (string & {})

/**
 * flexコンテナ内でアイテムを複数行にわたって配置するためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * nowrap: flexアイテムを1行に並べる
 * wrap: flexアイテムを複数行にわたって並べる。ただし、1行に収まる場合は、1行に並べる。
 * wrap-reverse: 複数行にわたってflexアイテムを並べるが、最後の行から最初の行に向かって配置される。
 */
export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'

/**
 * flexコンテナ内でアイテムの配置方向を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * column: アイテムを縦方向に配置する
 * column-reverse: アイテムを縦方向に逆順で配置する
 * row: アイテムを横方向に配置する
 * row-reverse: アイテムを横方向に逆順で配置する
 */
export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'

/**
 * flexアイテム自体の横方向の配置方法を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * SelfPosition型: flexアイテムの横方向の配置方法
 * auto: ブラウザのデフォルト値を適用する
 * baseline: flexアイテムを行のベースラインに揃える
 * left: flexアイテムを左端に揃える
 * normal: 通常の配置
 * right: flexアイテムを右端に揃える
 * stretch: flexアイテムを親要素の横幅いっぱいに広げる
 * string型: コードの自動補完
 */
export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

/**
 * flexアイテム自体の縦方向の配置方法を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * SelfPosition型: flexアイテムの縦方向の配置方法
 * auto: ブラウザのデフォルト値を適用する
 * baseline: flexアイテムを行のベースラインに揃える
 * normal: 通常の配置
 * stretch: flexアイテムを親要素の縦幅いっぱいに広げる
 * string型: コードの自動補完
 */
export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {})

/**
 * Grid
 */

/**
 * gridアイテムのグリッドラインの位置を表すための型
 * auto: ブラウザのデフォルト値を適用する
 * string型: コードの自動補完
 */
type GridLine = 'auto' | (string & {})

/**
 * gridアイテムが占めるグリッド列の数を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * GridLine型: gridアイテムのグリッドラインの位置
 * string型: コードの自動補完
 */
export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | (string & {})

/**
 * gridアイテムが占めるグリッド行の数を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * GridLine型: gridアイテムのグリッドラインの位置
 * string型: コードの自動補完
 */
export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {})

/**
 * gridコンテナ内でのグリッド自動配置の方法を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * column: 列に自動配置
 * dense: グリッドアイテムを空いているセルにできるだけ詰め込む
 * row: 行に自動配置
 * string型: コードの自動補完
 */
export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  | (string & {})

/**
 * gridアイテムが占めるグリッドエリアの名前を表すためのCSSプロパティの型
 * CSSPropertyGlobals型: CSSプロパティに対するグローバル値
 * GridLine型: gridアイテムのグリッドラインの位置
 * string型: コードの自動補完
 */
export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {})
