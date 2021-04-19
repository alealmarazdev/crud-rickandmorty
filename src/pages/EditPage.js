import { useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout, Spin } from 'antd';

import actions from '../redux/actions/characterActions'
import { fetchCharacter } from '../redux/reducers/characters'
import FormEdit from '../components/FormEdit'
import styles from './CharacterPage.module.css'

const { Header, Content } = Layout;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const EditPage = () => {
    const character = useSelector(state => state.characters.selected)
    const dispatch = useDispatch()
    const query = useQuery()
    const history = useHistory()

    useEffect(() => {
        if (!character) {
            const id = query.get('id')
            dispatch(fetchCharacter(id))
        }
    }, [])

    const handleEdition = (edited) => {
        dispatch(actions.updateCharacter(edited))
        history.push('/')
    }
    return(
        <Layout>
            <Header className={styles.header}>
                <h2>Edit Fields</h2>
            </Header>
            <Content className={styles.content}>
                {!character && <Spin tip="Loading..." />}
                {character && <FormEdit character={character} onEdit={handleEdition}/>}
            </Content>
        </Layout>
    )
}

export default EditPage;
