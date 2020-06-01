import React from 'react';
import { FileOutlined,
     FolderOpenOutlined, 
     SaveOutlined, 
     BorderOuterOutlined, 
     UndoOutlined, 
     RedoOutlined } from '@ant-design/icons';
import {PageHeader, Row, Col} from 'antd'


const Header = () => {
    return (  

    <Row style={{alignItems:'center'}}>
        <Col span={3}>
            SIDLAB 5.0
        </Col>
        <Col span={7} offset={1}>
            <FileOutlined style={{fontSize:'4rem', marginRight:'1rem'}}/>
            <FolderOpenOutlined style={{fontSize:'4rem', marginRight:'1rem'}} />
            <SaveOutlined style={{fontSize:'4rem', marginRight:'1rem'}} />
            <BorderOuterOutlined style={{fontSize:'4rem', marginRight:'1rem'}} />
            <BorderOuterOutlined style={{fontSize:'4rem', marginRight:'1rem'}} />
            <UndoOutlined style={{fontSize:'4rem', marginRight:'1rem'}}/>
            <RedoOutlined style={{fontSize:'4rem'}}/>
        </Col>
    </Row>     
    )
}

export default Header
