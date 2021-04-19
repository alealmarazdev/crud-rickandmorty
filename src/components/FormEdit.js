import { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';

const FormEdit = ({character, onEdit = () => {}}) => {
    const [fields, setFields] = useState([])

    useEffect(() => {
        const fields = ['image', 'name', 'status', 'species'].map(field => ({
            name: [field],
            value: character[field],
        }))

        setFields(fields)
    }, [])

    const handleSubmit = (values) => {
        const edited = {
            ...character,
            ...values
        }
        onEdit(edited)
    }
    return (
        <Form name='edit-character' fields={fields} onFinish={handleSubmit}>
            <Form.Item
                name='image'
                label='Image'
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='name'
                label='Name'
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='status'
                label='Status'
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='species'
                label='Species'
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item >
                <Button
                    type='primary'
                    className='bg-success'
                    htmlType='submit'
                    style={{ margin: '14px' }}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}

export default FormEdit;
