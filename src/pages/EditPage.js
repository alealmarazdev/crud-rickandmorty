import { Layout } from 'antd';

import FormEdit from '../components/FormEdit'
import styles from './CharacterPage.module.css'

const {  Header, Content } = Layout;

const EditPage = () => {

    return(
        <Layout>
            <Header className={styles.header}>
                <h2>Edit Fields</h2>
            </Header>
            <Content className={styles.content}>
            <FormEdit  />
            </Content>
        </Layout>
    )
}

export default EditPage;
