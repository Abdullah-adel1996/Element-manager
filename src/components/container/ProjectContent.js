import React from 'react';
import { Upload, Button, Card, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
};


const ProjectContent = () => {

    return (
    <React.Fragment>
       <Row style={{justifyContent:'center',  marginBottom:'1rem'}}>
            <Card style={{width:'80%', marginTop:'2rem'}}>
            <h4 style={{marginTop:'-3.5rem', backgroundColor:'#fff', display:'table'}}>Description</h4>
                    <br/><br/><br/><br/><br/><br/>
            </Card>
        </Row>
       <Row style={{justifyContent:'center', marginBottom:'1rem', marginTop:'2rem'}}>
        <Card style={{width:'80%'}}>
        <h4 style={{marginTop:'-3.5rem', backgroundColor:'#fff', display:'table'}}>Picture</h4>

            <Upload {...props}>
                <Button>
                <UploadOutlined /> Add Picture
                </Button>
            </Upload>
        </Card>
        </Row>
    </React.Fragment>
    
    )
}

export default ProjectContent
