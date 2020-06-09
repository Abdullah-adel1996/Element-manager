import React, {useState} from 'react'
import { Card, Row, Col, Tabs, Button, Space } from 'antd'
import FluidContent from './FluidContent';
import ProjectContent from './ProjectContent';
import Console from './Console';
import { Ribbon, RibbonGroup, RibbonGroupItem, RibbonButton } from "react-bootstrap-ribbon";
import { SaveFilled, FileTextOutlined, DatabaseOutlined, FolderViewOutlined } from '@ant-design/icons';
import ResizePanel from "react-resize-panel";
import Ribbons from './Ribbons';


const FileTabItems = () => {


    const [contentNum, setContentNum] = useState(1)

    const handleClick = (num) => {
        setContentNum(num)

    }

      let content = null;
        if(contentNum==1) {
            content = <div style={{border:'0.5px solid #ddd', height:'100vh', width:'100%'}}>
                            <FluidContent/>
                     </div>
        } else if (contentNum==2) {
            content = <div style={{border:'0.5px solid #ddd', height:'100vh', width:'100%'}}>
                         <ProjectContent/>
                    </div> }

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }


    return (
        <div style={{marginTop:'-1.5rem'}}>

          
            <Ribbons handleClick={handleClick}/>
        <Row style={{marginTop:'5px', flexWrap:'nowrap'}}>
        <ResizePanel direction="e" style={{width:'16%'}}>
                {content}
         </ResizePanel>
            <div style={{marginLeft:'1rem' ,width:'83.27%'}}>
                 <Tabs onChange={callback} type="card">
                     <TabPane 
                     tab="Network" 
                     key="1"
                     style={{
                        marginTop:'-1.6rem',
                        borderLeft:'1px solid #f0f0f0'
                       }} >
                         <div style={{height:'80.55vh'}}>
                         Content of Tab Pane 1
                         </div>
                     </TabPane>
                     <TabPane 
                     tab="Graph" key="2"
                     style={{
                        borderLeft:'1px solid #f0f0f0'
                       }}>
                         <div style={{height:'80.55vh'}}>
                         Content of Tab Pane 2
                         </div>
                    </TabPane>
                     <TabPane 
                     tab="CAD Viewer" key="3"
                     style={{
                        borderLeft:'1px solid #f0f0f0'
                       }}>
                          <div style={{height:'80.55vh'}}>
                         Content of Tab Pane 3
                         </div>

                    </TabPane>
                 </Tabs>
                 <Console/>
            </div>
          
        </Row>
        
        </div>
    )
}

export default FileTabItems


{/* <Ribbon breakpoint="lg" height="9rem">
                
                <RibbonGroup title="Section.1" colClass="col-2">
                    <RibbonGroupItem colClass="col-6">
                        <RibbonButton onClick={() => handleClick(1)}>
                            <DatabaseOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>Fluid Data</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-6">
                        <RibbonButton onClick={() => handleClick(2)}>
                            <FileTextOutlined style={{fontSize:'3rem', marginBottom:'.5px'}}/>
                            <div style={{fontSize:'1.1rem'}}>project Description</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                </RibbonGroup>

                <RibbonGroup title="Section.2" colClass="col-2">
                    <RibbonGroupItem colClass="col-6">
                        <RibbonButton onClick={() => handleClick(3)}>
                            <DatabaseOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>Global Variables</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                    <RibbonGroupItem colClass="col-6">
                        <RibbonButton onClick={() => handleClick(4)}>
                            <FileTextOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>Verison Manager</div>
                        </RibbonButton>
                    </RibbonGroupItem>
                </RibbonGroup>

                <RibbonGroup title="Section.3" colClass="col-2">
                    <RibbonGroupItem colClass="col-12">
                        <RibbonButton onClick={() => handleClick(5)}>
                            <FolderViewOutlined style={{fontSize:'3rem'}}/>
                            <div style={{fontSize:'1.2rem'}}>CAD Viewer</div>
                        </RibbonButton>
                    </RibbonGroupItem>

                </RibbonGroup>
            </Ribbon> */}