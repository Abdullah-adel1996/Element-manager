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
import { Row, Col} from 'antd'

const Header = () => {
    return (  
        
    <Row className='header' style={{alignItems:'center', backgroundColor:'#fff'}}>
            <h4 style={{color:'#0060a7', marginLeft:'1rem', marginBottom:'0', marginRight:'1rem', marginTop:'-5px'}}> SIDLAB 5.0 </h4>
        <Col span={20} style={{ marginBottom:'5px'}}>
            <FileFilled style={{fontSize:'1.5rem', color:'#0060a7', marginRight:'1rem', cursor:'pointer'}}/>
            <FolderOpenFilled style={{fontSize:'1.7rem', color:'#0060a7', marginRight:'1rem', cursor:'pointer'}} />
            <SaveFilled style={{fontSize:'1.5rem', color:'#0060a7', marginRight:'1rem', cursor:'pointer'}} />
            <BookFilled style={{fontSize:'1.5rem', color:'#0060a7', marginRight:'1rem', cursor:'pointer'}} />
            <BookFilled style={{fontSize:'1.5rem', color:'#0060a7', marginRight:'1rem', cursor:'pointer'}} />
            <UndoOutlined style={{fontSize:'1.5rem', color:'#0060a7', marginRight:'1rem', cursor:'pointer'}}/>
            <RedoOutlined style={{fontSize:'1.5rem', color:'#0060a7', cursor:'pointer'}}/>
        </Col>
    </Row>     
    )
}

export default Header
