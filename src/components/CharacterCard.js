
import React from 'react';
import { Button, Card, Col } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CharacterCard = ({character}) => {
    const { status, name, image, species, id } = character;
    return(
        <Col span={8}>
            <Card
                style={{ width: 280 }}
                cover={
                <img
                    alt={`character-${name}`}
                    src={image}
                />
                }
                actions={[
                <Button type='text' >
                    <EditOutlined key='edit' />
                </Button>,
                <Button type='text' >
                    <DeleteOutlined key='delete' />
                </Button>,
                ]}
            >
                <h2>{name} </h2>
                <p>{status}</p>
                <p>{species}</p>
            </Card>
        </Col>

    )
}

export default CharacterCard;
