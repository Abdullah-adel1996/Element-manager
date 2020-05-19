import React from "react";
import { Tabs, Row, Col } from 'antd';
import ElementTable from './ElementTable';
import PropTable from './PropTable';

import "./App.css";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}




function App() {
  return (
    <Row style={{margin:'20px'}} >
      <Col span={11}>
        <h2>Elements</h2>
   <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="One Port" key="1">
      <ElementTable/>
    </TabPane>
    <TabPane tab="Two Port" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Multi Port" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Brunching Nodes" key="4">
      Content of Tab Pane 4
    </TabPane>
    <TabPane tab="Sources" key="5">
      Content of Tab Pane 5
    </TabPane>
  </Tabs>
  </Col>
  <Col span={10} offset={1}>
  <h2>Properties</h2>
    <PropTable/> 
  </Col>
  </Row>
  );
}

export default App;
