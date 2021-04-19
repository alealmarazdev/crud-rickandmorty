import { useHistory } from 'react-router-dom';
import { Layout } from 'antd';

import actions from '../redux/actions/characterActions'

import FormEdit from '../components/FormEdit'
import styles from './CharacterPage.module.css'

const { Header, Content } = Layout;

const EditPage = () => {

    const history = useHistory()

    const handleEdition = () => {
        history.push('/')
    }
    return(
        <Layout>
            <Header className={styles.header}>
                <h2>Edit Fields</h2>
            </Header>
            <Content className={styles.content}>
                <FormEdit onEdit={handleEdition}/>
            </Content>
        </Layout>
    )
}

export default EditPage;
