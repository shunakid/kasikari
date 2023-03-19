import type { NextPage } from 'next'
import Text from 'components/atoms/Text'

const HomePage: NextPage = () => {
  return (
    <>
      <Text as="h1" marginBottom={0} color="brack" variant="extraLarge">
        kasikari C2Cで
      </Text>
      <Text as="h1" marginTop={0} color="brack" variant="extraLarge">
        お気に入りのアイテムを見つけよう
      </Text>
      <Text as="p" variant="mediumLarge">
        kasikari
        C2Cは実践的なNext.jsアプリケーション開発で使われるデモアプリです。
        <Text
          as="a"
          style={{ textDecoration: 'underline' }}
          target="_blank"
          href="https://github.com/shunakid/kasikari"
          variant="mediumLarge"
        >
          github
        </Text>
      </Text>
      <Text as="p" variant="mediumLarge">
        このアプリはTypeScript/Next.jsで作成されており、バックエンドはFirebaseが使用されています。
      </Text>
      <Text as="h2" variant="large">
        トップス
      </Text>
      <Text as="h2" variant="large">
        本
      </Text>
      <Text as="h2" variant="large">
        シューズ
      </Text>
    </>
  )
}

export default HomePage
