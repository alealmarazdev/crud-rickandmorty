import { Row, Layout } from 'antd'
const { Header, Content } = Layout;

const CharacterPage = () => {

  return (
    <Layout>
      <Header>
        <h1>Rick & Morty</h1>
      </Header>
      <Content >
        <Row gutter={[16, 16]} justify="center" align="top">

        </Row>
      </Content>
    </Layout>
  )
}

export default CharacterPage;
