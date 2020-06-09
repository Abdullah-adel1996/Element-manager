import React, {Fragment, useState, useRef} from 'react';
import { Row, Col, Button, Progress } from 'antd';
import ContentEditable from 'react-contenteditable';
import MainTabs from './components/container/MainTabs';
import Console from './components/container/Console';
import Header from './components/container/Header';
import PropsTableHeader from './components/elements-table/PropsTableHeader';
import PropsTableRow from './components/elements-table/PropsTableRow';
import ElementsTableHeader from './components/elements-table/ElementsTableHeader';
import ElementsTableRow from './components/elements-table/ElementsTableRow';
import Ribbons from './components/container/Ribbons';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { BorderOuterOutlined, VerticalRightOutlined } from '@ant-design/icons';



import "./App.css";
import GreenBar from './components/container/GreenBar';



const DragHandle = sortableHandle(() => <BorderOuterOutlined className='drag' />);

const SortableItem = sortableElement(({children}) => {
  return <div>{children}</div>
  });

const SortableContainer = sortableContainer(({children}) => {
  return <div>{children}</div>;
});

const App = () => {

  const elementsTableData = [
    {
      id: 1,
      elementName: 'open end',
      lowFreq: true,
      highFreq: true,
      lowAndHigh: true,
      outlet: true
    },
    {
      id: 2,
      elementName: 'Fan',
      lowFreq: true,
      highFreq: true,
      lowAndHigh: false,
      outlet: false
    }
  ]

  const propsTableData = [
    { 
      id: 1,
      requiredLf: true,
      requiredHf: false, 
      propName: 'Area', 
      propertyType: {
        oneval: 'One Value',
        multival: 'Multi Value',
        torf: 'T or F'
    }, 
      defaultdVal: 'One Value', 
      selectedVal: '0',
      unit: 'dim2'},
    { 
      id: 2, 
      requiredLf: false,
      requiredHf: true, 
      propName: 'Diameter', 
      propertyType: {
        oneval: 'One Value',
        multival: 'Multi Value',
        torf: 'T or F'
    }, 
      defaultdVal: 'Multi Value', 
      selectedVal: '0:0:0',
      unit: 'dim'}
  ]

  const [data, setData] = useState(propsTableData)
  const [data1, setData1] = useState(elementsTableData)
  const [selectedRowId, setSelectedRowId] = useState(null)
  const [selectedRowId1, setSelectedRowId1] = useState(null)

  console.log(selectedRowId1)

  const handleEdit = (index, datatype, value) => {
    
    const newState = data.map((item, i) => {
      if (i == index) {
        return {...item, [datatype]: value};
      }
      return item;
    });

    setData(newState)
  }

  const handleEdit1 = (index, datatype, value) => {
    
    const newState = data1.map((item, i) => {
      if (i == index) {
        return {...item, [datatype]: value};
      }
      return item;
    });

    setData1(newState)
  }

  const handleAdd1 = () => {
    const newProp = {
      id: data.length+1, 
      elementName: 'open end',
      lowFreq: false,
      highFreq: false,
      lowAndHigh: false,
      outlet: false
    }

    setData1([...data1, newProp])
  }

  const handleAdd = () => {
    const newProp = {
      id: data1.length+1, 
      requiredLf: false,
      requiredHf: false, 
      propName: `new Prop ${data.length+1}`, 
      propertyType: {
      oneval: 'One Value',
      multival: 'Multi Value',
      torf: 'T or F'
    }, 
    defaultdVal: 'One Value', 
    selectedVal: '0',
    unit: '--'
    }

    setData([...data, newProp])
  }

  const handleDelete = (id, id1) => {
    setData(data.filter(el => el.id !== id))
    setData1(data1.filter(el => el.id !== id1))
  }

  // const handleDelete1 = id => {
	// 	setData1(data1.filter(el => el.id !== id))
  // }

  const handleClick = (id) => {
    setSelectedRowId(id)
  }

  const handleClick1 = (id) => {
    setSelectedRowId1(id)
  }


  const onSortEnd = ({oldIndex, newIndex}) => {
    setData(arrayMove(data, oldIndex, newIndex))
  };

  const onSortEnd1 = ({oldIndex, newIndex}) => {
    setData1(arrayMove(data1, oldIndex, newIndex))
  };

  return (
    <div style={{margin:'5px'}}>
      <Header/>
      <MainTabs/>
      <GreenBar/>
     
    </div>

    // <Row style={{margin:'1rem'}}>
    //   <Col span={11} >
    //           <ElementsTableHeader/>
    //       <SortableContainer onSortEnd={onSortEnd1} useDragHandle >
    //           {data1.map((el, index) => (
    //             <SortableItem key={`item-${el.id}`} index={index}>
    //             <ElementsTableRow 
    //               key={el.id}
    //               index={index}
    //               id={el.id}
    //               styless={{backgroundColor: selectedRowId1 === el.id ? "#f3f3f3" : "#fff"}}
    //               name={el.elementName}
    //               handler={<DragHandle/>}
    //               handleDelete={handleDelete}
    //               handleEdit={handleEdit1}
    //               handleClick={handleClick1}
    //             />
    //         </SortableItem>

    //           ))}
    //        </SortableContainer>
    //        <Button style={{marginTop:'1rem'}} onClick={handleAdd1}>Add Row</Button>
    //   </Col>

    //     <Col span={12} offset={1}>
    //        <PropsTableHeader/>
    //     <SortableContainer onSortEnd={onSortEnd} useDragHandle >
    //          {data.map((el, index) => (
    //              <SortableItem key={`item-${el.id}`} index={index}>
    //                 <PropsTableRow 
    //                     key={el.id}
    //                     styless={{backgroundColor: selectedRowId === el.id ? "#f3f3f3" : "#fff"}}
    //                     index={index}
    //                     id={el.id}
    //                     handler={<DragHandle/>}
    //                     lf={el.requiredLf}
    //                     hf={el.requiredHf}
    //                     name={el.propName} 
    //                     default={el.defaultdVal} 
    //                     option1={el.propertyType.oneval}
    //                     option2={el.propertyType.multival}
    //                     option3={el.propertyType.torf}
    //                     selected={el.selectedVal}
    //                     unit={el.unit}
    //                     handleDelete={handleDelete}
    //                     handleEdit={handleEdit}
    //                     handleClick={handleClick}
    //                 />
    //         </SortableItem>
    //     ))}
    //     </SortableContainer>
    //       <Button style={{marginTop:'1rem'}} onClick={handleAdd}>Add Row</Button> 
    //   </Col>
    // </Row>
    
      
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
