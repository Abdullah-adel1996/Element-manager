import React from 'react';
import useMedia from 'use-media';
import { Row, Button, Col, Typography, Select, Menu, Dropdown} from 'antd';
import { SaveFilled, FileTextOutlined, DatabaseOutlined, FolderViewOutlined,DownOutlined } from '@ant-design/icons';


const Ribbons = (props) => {

    const { Text } = Typography;
    const { Option } = Select;

    const isWide = useMedia({minWidth: '750px'});
    const isWide1 = useMedia({minWidth: '650px'});
    const isWide2 = useMedia({minWidth: '600px'})

    function handleMenuClick(e) {
        console.log('click', e.key);
        props.handleClick(e.key)
      }

    function handleMenuClick1(e) {
    console.log('click', e);
    }

      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1"><DatabaseOutlined style={{fontSize:'1.5rem'}}/>Fluid Data</Menu.Item>
          <Menu.Item key="2"><FileTextOutlined style={{fontSize:'1.5rem'}}/>Project Discription</Menu.Item>
        </Menu>
      );

      const menu1 = (
        <Menu onClick={handleMenuClick1}>
          <Menu.Item key="1"><DatabaseOutlined style={{fontSize:'1.5rem'}}/>Global Variables</Menu.Item>
          <Menu.Item key="2"><FileTextOutlined style={{fontSize:'1.5rem'}}/>Version Manager</Menu.Item>
        </Menu>
      );

    return (
        <React.Fragment>
        <Row style={{width:'1337px', borderBottom:'1px solid #f0f0f0'}}>
            {isWide?
            <Col span={4} style={{display:'flex', flexWrap:'wrap', textAlign:'center', borderRight:'1px solid #f0f0f0'}}>
                <Col span={12}>
                    <Button className='btn-1' onClick={()=> props.handleClick(1)}>
                        <DatabaseOutlined style={{fontSize:'2.5rem'}}/>
                        <Text style={{display:'block', marginLeft:'0'}}>Fluid Data</Text>
                        <Text style={{display:'block', marginLeft:'0', marginTop:'-5px'}}>&nbsp;</Text>
                    </Button>
                 </Col>
                <Col span={12}>
                    <Button className='btn-1' onClick={()=> props.handleClick(2)}>
                        <FileTextOutlined style={{fontSize:'2.5rem'}}/>
                        <Text style={{display:'block', marginLeft:'0'}}>Project</Text>
                        <Text style={{display:'block', marginLeft:'0', marginTop:'-5px'}}>Discription</Text>
                    </Button>
                </Col>
                <Col span={24}><Text>Section.1</Text></Col>
            </Col> :
            <Col span={2} style={{display:'flex', textAlign:'center', borderRight:'1px solid #f0f0f0'}}>
                <Col span={24}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Button className='btn-1'>
                            <DatabaseOutlined style={{fontSize:'2.5rem'}}/>
                        <DownOutlined />
                            <Text style={{display:'block', marginLeft:'0'}}>Section.1</Text>
                        </Button>
                        </Dropdown>
                    </Col>
                </Col>  }

            {isWide1? <Col span={4} style={{display:'flex', flexWrap:'wrap', textAlign:'center', borderRight:'1px solid #f0f0f0'}}>
                <Col span={12}>
                    <Button className='btn-1'>
                        <DatabaseOutlined style={{fontSize:'2.5rem'}}/>
                        <Text style={{display:'block', marginLeft:'0'}}>Global</Text>
                        <Text style={{display:'block', marginLeft:'0', marginTop:'-5px'}}>Variables</Text>
                    </Button>
                </Col>
                <Col span={12}>
                    <Button className='btn-1'>
                        <SaveFilled style={{fontSize:'2.5rem'}}/>
                        <Text style={{display:'block', marginLeft:'0'}}>Version</Text>
                        <Text style={{display:'block', marginLeft:'0', marginTop:'-5px'}}>Manager</Text>
                    </Button>
             </Col> <Col span={24}><Text>Section.2</Text></Col>
        </Col> : <Col span={2} style={{display:'flex', textAlign:'center', borderRight:'1px solid #f0f0f0'}}>
                    <Col span={24}>
                        <Dropdown overlay={menu1} trigger={['click']}>
                            <Button className='btn-1'>
                            <SaveFilled style={{fontSize:'2.5rem'}}/>
                        <DownOutlined />
                            <Text style={{display:'block', marginLeft:'0'}}>Section.2</Text>
                        </Button>
                        </Dropdown>
                        </Col>
                </Col>  }

                {isWide2? <Col span={4} style={{display:'flex', flexWrap:'wrap', textAlign:'center', borderRight:'1px solid #f0f0f0'}}>
                <Col span={24}>
                    <Button className='btn-1'>
                        <FolderViewOutlined style={{fontSize:'2.5rem'}}/>
                        <Text style={{display:'block', marginLeft:'0'}}>CAD Viewer</Text>
                        <Text style={{display:'block', marginLeft:'0', marginTop:'-5px'}}>&nbsp;</Text>
                    </Button>
                    </Col>
                    <Col span={24}><Text>Section.3</Text></Col>
            </Col>  : <Col span={2} style={{display:'flex', textAlign:'center', borderRight:'1px solid #f0f0f0'}}>
                <Col span={24}>
                    <Button className='btn-1'>
                        <FolderViewOutlined style={{fontSize:'2.5rem'}}/>
                        <Text style={{display:'block', marginLeft:'0'}}>CAD Viewer</Text>
                        <Text style={{display:'block', marginLeft:'0', marginTop:'-5px'}}>&nbsp;</Text>
                    </Button>
                    </Col>
            </Col> }
        </Row>
    </React.Fragment>
    )
}

export default Ribbons
