import { useSelector } from 'react-redux';
import { Row, Layout } from 'antd'

import CharacterCard from '../components/CharacterCard'
import styles from './CharacterPage.module.css'

const { Header, Content } = Layout;

const CharacterPage = () => {
  const characters = useSelector(state => state.characters.characters)
  return (
    <Layout>
      <Header className={styles.header}>
        <h1>Rick & Morty</h1>
      </Header>
      <Content className={styles.content}>
        <Row gutter={[16, 16]} justify='center' align='top'>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character}/>
          ))}
        </Row>
      </Content>
    </Layout>
  )
}

export default CharacterPage;
