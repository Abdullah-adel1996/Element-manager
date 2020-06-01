import React, {Fragment} from 'react';
import MainTabs from './components/container/MainTabs';
import Console from './components/container/Console';
import "./App.css";
import Header from './components/container/Header';






const App = () => {

  
  return (
    <div style={{margin:'1rem'}}>
      <Header/>
      <br/>
      <MainTabs/>
      <Console/>
    </div>
      
  )
}

export default App




















// import React, {useState} from "react";
// import { Tabs, Row, Col, Button } from 'antd';
// import {connect} from 'react-redux';

// import "./App.css";

// const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

// function App(props) {

//   const [data, setData] = useState(
//     [
//   {
//     key: '0',
//     propname: 'Area',
//   },
//   {
//     key: '1',
//     propname: 'Diameter',
//   }
//   ]
//   )

//   let Content = props.properties.map((el, index) =>
//   <PropTable propname={el.propname} data={data} key={el.key} key1={el.key} index={index}/> 

//   )


//   const handleClick = () => {
//     let newData = {
//       key: '0',
//     propname: 'Area',
//     }

//     props.dispatch(addProp(newData))
//     //setData([...data, newData])
//   }
//   console.log(props.properties)

  
 
//   return (
//     <Row style={{margin:'20px'}} >
//       <Col span={11}>
//         <h2>Elements</h2>
//    <Tabs defaultActiveKey="1" onChange={callback}>
//     <TabPane tab="One Port" key="1">
//       <ElementTable/>
//     </TabPane>
//     <TabPane tab="Two Port" key="2">
//       Content of Tab Pane 2
//     </TabPane>
//     <TabPane tab="Multi Port" key="3">
//       Content of Tab Pane 3
//     </TabPane>
//     <TabPane tab="Brunching Nodes" key="4">
//       Content of Tab Pane 4
//     </TabPane>
//     <TabPane tab="Sources" key="5">
//       Content of Tab Pane 5
//     </TabPane>
//   </Tabs>
//   </Col>
//   <Col span={10} offset={1}>
//   <h2>Properties</h2>
  
// </Col>
// <PropTable1/>
//   </Row>
//   );
// }

// const mapStateToProps = ({properties}) => {

//   return {properties}

// }



// export default connect(mapStateToProps) (App);
