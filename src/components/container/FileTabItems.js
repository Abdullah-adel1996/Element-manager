import React, {useState} from 'react'
import { Card, Row, Col, Tabs, Button } from 'antd'
import FluidContent from './FluidContent';
import ProjectContent from '../ProjectContent';

const FileTabItems = () => {


    const [contentNum, setContentNum] = useState(1)
    const [isClicked, setIsClicked] = useState(false)

    let outColor = isClicked? 'red' : '#fff';

    const gridStyle = {
        padding: '1.5rem',
        width: '15%',
        textAlign: 'center',
        margin: '1rem',
        cursor: 'pointer',
      };

    const handleClick = (num) => {
        setContentNum(num)

        if (num) {
            setIsClicked(true)
        }

    }

      let content = null;
        if(contentNum==1) {
            content = <Col span={8} style={{border:'0.5px solid #ddd'}}>
                        <FluidContent/>
                    </Col>
        } else if (contentNum==2) {
            content = <Col span={8} style={{border:'0.5px solid #ddd'}}>
                        <ProjectContent/>
                    </Col>
        }

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }


    return (
        <div>
            <Card style={{border: '0'}}>
                <Card.Grid onClick={() => handleClick(1)} style={gridStyle} tabindex="1">
                    Fluid Data
                </Card.Grid>
                <Card.Grid onClick={() => handleClick(2)} style={gridStyle} tabindex="2">
                    Project Description
                </Card.Grid>
                <Card.Grid onClick={() => handleClick(3)} style={gridStyle} tabindex="3">
                    Global Variables
                </Card.Grid>
                <Card.Grid onClick={() => handleClick(4)} style={gridStyle} tabindex="4">
                    Verison Manager
                </Card.Grid>
                <Card.Grid onClick={() => handleClick(5)} style={gridStyle} tabindex="5">
                    CAD Viewer
                </Card.Grid>
            </Card>
            <br/>
            <br/>
            <Row>
               {content}
               <Col span={15} offset={1}>
                    <Tabs onChange={callback} type="card">
                        <TabPane tab="Network" key="1">
                             <button>fope</button>
                             <button>fope</button>
                        </TabPane>
                        <TabPane tab="Graph" key="2">
                             Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="CAD viewer" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
               </Col>
            </Row>
        </div>
    )
}

export default FileTabItems
