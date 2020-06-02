import React, {useState} from 'react'
import { Card, Row, Col, Tabs, Button } from 'antd'
import FluidContent from './FluidContent';
import ProjectContent from './ProjectContent';

import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";
import { SaveFilled, FileTextOutlined, DatabaseOutlined, FolderViewOutlined } from '@ant-design/icons';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-ribbon/dist/react-bootstrap-ribbon.css";
import Console from './Console';


const FileTabItems = () => {


    const [contentNum, setContentNum] = useState(1)

    const handleClick = (num) => {
        setContentNum(num)

    }

      let content = null;
        if(contentNum==1) {
            content = <Col span={5} style={{border:'0.5px solid #ddd', height:'100%'}}>
                        <FluidContent/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Col>
        } else if (contentNum==2) {
            content = <Col span={5} style={{border:'0.5px solid #ddd', height:'100%'}}>
                        <ProjectContent/>
                        <br/><br/><br/><br/>
                    </Col>
        }

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }


    return (
        <div>
            <Ribbon breakpoint="lg" height="10rem">
                
                <RibbonGroup title="Section.1" colClass="col-4">
                    <RibbonGroupItem colClass="col-6">
                        <RibbonButton onClick={() => handleClick(1)}>
                            <DatabaseOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>Fluid Data</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-6">
                        <RibbonButton onClick={() => handleClick(2)}>
                            <FileTextOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>project Description</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                </RibbonGroup>

                <RibbonGroup title="Section.2" colClass="col-4">
                    <RibbonGroupItem colClass="col-6">
                        <RibbonButton onClick={() => handleClick(3)}>
                            <DatabaseOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>Global variables</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-6">
                        <RibbonButton onClick={() => handleClick(4)}>
                            <FileTextOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>Verison Manager</div>
                        </RibbonButton>
                    </RibbonGroupItem>
                </RibbonGroup>

                <RibbonGroup title="Section.3" colClass="col-4">
                    <RibbonGroupItem colClass="col-12">
                        <RibbonButton onClick={() => handleClick(5)}>
                            <FolderViewOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>CAD Viewer</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                </RibbonGroup>
            </Ribbon>
        <Row style={{marginTop:'1.5rem'}}>
             {content}
            <Col span={18} style={{marginLeft:'1rem'}}>
                 <Tabs onChange={callback} type="card">
                     <TabPane tab="Network" key="1">
                         Content of Tab Pane 1
                         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                     </TabPane>
                     <TabPane tab="Graph" key="2">
                         Content of Tab Pane 2
                         <br/><br/><br/><br/><br/>
                     </TabPane>
                     <TabPane tab="CAD viewer" key="3">
                          Content of Tab Pane 3
                          <br/><br/><br/><br/><br/>
                    </TabPane>
                 </Tabs>
                 <Console/>
            </Col>
        </Row>
        </div>
    )
}

export default FileTabItems
