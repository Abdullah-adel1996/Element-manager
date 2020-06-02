import React from 'react';
import { FileOutlined,
     FolderOpenOutlined, 
     SaveOutlined, 
     BorderOuterOutlined, 
     UndoOutlined, 
     RedoOutlined, 
     FileFilled,
     SaveFilled,
     FolderOpenFilled,
     BookFilled} from '@ant-design/icons';
import {PageHeader, Row, Col} from 'antd'

const Header = () => {
    return (  

    <Row className='header' style={{alignItems:'center', backgroundColor:'#0060a7'}}>
        <Col span={3}>
            <h3 style={{color:'#fff', marginLeft:'1rem', marginTop:'2px'}}> SIDLAB 5.0 </h3>
        </Col>
        <Col span={7} offset={1}>
            <FileFilled style={{fontSize:'1.7rem', color:'#fff', marginRight:'1rem', cursor:'pointer'}}/>
            <FolderOpenFilled style={{fontSize:'1.7rem', color:'#fff', marginRight:'1rem', cursor:'pointer'}} />
            <SaveFilled style={{fontSize:'1.7rem', color:'#fff', marginRight:'1rem', cursor:'pointer'}} />
            <BookFilled style={{fontSize:'1.7rem', color:'#fff', marginRight:'1rem', cursor:'pointer'}} />
            <BookFilled style={{fontSize:'1.7rem', color:'#fff', marginRight:'1rem', cursor:'pointer'}} />
            <UndoOutlined style={{fontSize:'1.7rem', color:'#fff', marginRight:'1rem', cursor:'pointer'}}/>
            <RedoOutlined style={{fontSize:'1.7rem', color:'#fff', cursor:'pointer'}}/>
        </Col>
    </Row>     
    )
}

export default Header
