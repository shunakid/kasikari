import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  /**
   * styled-component
   * サーバーサイドレンダリングで使用される、スタイル付きコンポーネントの設定を追加する
   * @param ctx ドキュメントコンテキスト
   */
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    // styled-componentsに必要なServerStyleSheetを生成する
    const sheet = new ServerStyleSheet()

    // 元のrenderPageを保持する
    const originalRenderPage = ctx.renderPage

    try {
      // renderPageを変更し、collectStylesを呼び出して、サーバーサイドレンダリングされたアプリのスタイルを取得する
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      // Next.jsのドキュメント初期設定を取得する
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        // 取得したスタイルとstyled-componentsのスタイルを追加する
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        ),
      }
    } finally {
      // スタイルシートを最適化する
      sheet.seal()
    }
  }
}
