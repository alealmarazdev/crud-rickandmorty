import { Row, Layout } from 'antd'

import styles from './CharacterPage.module.css'
const { Header, Content } = Layout;

const CharacterPage = () => {

  return (
    <Layout>
      <Header className={styles.header}>
        <h1>Rick & Morty</h1>
      </Header>
      <Content className={styles.content}>
        <Row gutter={[16, 16]} justify="center" align="top">

        </Row>
      </Content>
    </Layout>
  )
}

export default CharacterPage;
