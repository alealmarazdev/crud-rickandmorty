import { useSelector, useDispatch } from 'react-redux';
import { Row, Layout } from 'antd';

import CharacterCard from '../components/CharacterCard';
import {removeCharacter} from '../redux/reducers/characters';

import 'antd/dist/antd.css';
import styles from './CharacterPage.module.css'

const { Header, Content } = Layout;

const CharacterPage = () => {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters.characters)

  const handleRemove = (id) => {
    dispatch(removeCharacter(id))
  }

  return (
    <Layout>
      <Header className={styles.header}>
        <h1>Rick & Morty</h1>
      </Header>
      <Content className={styles.content}>
        <Row gutter={[16, 16]} justify='center' align='top'>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} onRemove={handleRemove}/>
          ))}
        </Row>
      </Content>
    </Layout>
  )
}

export default CharacterPage;
