import type { NextPage } from 'next'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import Layout from 'components/templates/Layout'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Flex padding={2} justifyContent="center" backgroundColor="primary">
        <Flex
          width={{ base: '100%', md: '1040px' }}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box width="100%">
            <Text as="h1" marginBottom={0} color="white" variant="extraLarge">
              kasikari C2Cで
            </Text>
            <Text as="h1" marginTop={0} color="white" variant="extraLarge">
              お気に入りのアイテムを見つけよう
            </Text>
          </Box>
          <Box width="100%">
            <Text as="p" color="white" variant="mediumLarge">
              このアプリはTypeScript/Next.jsで作成されており、バックエンドはfirebaseが使用されています。
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex paddingBottom={2} justifyContent="center">
        <Box
          paddingLeft={{ base: 2, md: 0 }}
          paddingRight={{ base: 2, md: 0 }}
          width={{ base: '100%', md: '1040px' }}
        >
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              トップス
            </Text>
          </Box>
          <Box marginBottom={3}>
            <Text as="h2" variant="large">
              本
            </Text>
          </Box>
          <Box>
            <Text as="h2" variant="large">
              シューズ
            </Text>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default HomePage
