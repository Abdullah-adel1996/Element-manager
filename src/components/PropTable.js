// import React, {useState} from 'react';
// import { Table, Input, Button, Popconfirm, Form, Switch, Select, Menu, Dropdown } from 'antd';
// import { CloseOutlined, CheckOutlined, DownOutlined } from '@ant-design/icons';
// import {connect} from 'react-redux';
// import { editProp } from './actions/Properties';





// const PropTable = (props) => {
//     const { Option } = Select;
//      const [data, setData] = useState(
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
//  )
//     const [ay7aga, setAy7aga] = useState('philipines')
    
//     const handleChange = (value) => {
//       setAy7aga(value)
//     }
    
//     const handleChange1 = (index, dataType, value) => {
//       let newState = data.map((item, i) => {
//         if (i == index) {
//           return {...item, [dataType]: value};

//         }

//         return item;

//       });
//      setData(newState)
//     // props.dispatch(editProp(newState))
//     }

//     const handleCLick =(key)=> {
//       console.log(key)
//     }

//     // const handleCLick1 = () => {
//     //   let newData = {
//     //     key: '1',
//     //     propname: 'fhtf'
//     //   }
//     //   setData([...data, newData])
//     // }
//   return (
//     <React.Fragment>

// <table>
//   <tbody>
//   {/* {data.map((el, index)=> {
//     return ( */}
      
//         <tr onClick={()=>handleCLick(props.key1)}>
//         <td>
//           <input onChange={(e) => handleChange1(props.index, 'propname', e.target.value)} value={props.propname}/>
          
//           </td>
//           <td><Select defaultValue="One Value" style={{ width: 110 }} onChange={handleChange} >
//                       <Option value="oneval">One value</Option>
//                       <Option value="multival">Multi value</Option>
//                       <Option value="torf">T or F</Option>
//                   </Select></td>
//           <td>{ay7aga}</td>
//         </tr>
     
//     {/* ) */}
//   {/* })} */}
 
//   </tbody>
// </table>
//     {/* <div class="grid">
//       {data.map((el) => {

//         return (
//           [
//             <div onClick={()=>handleCLick(el.key)}>
//               {el.propname}
//           </div>,
//           <div>
//             <Select defaultValue="One Value" style={{ width: 110 }} onChange={handleChange} >
//                 <Option value="oneval">One value</Option>
//                 <Option value="multival">Multi value</Option>
//                 <Option value="torf">T or F</Option>
//             </Select>
//           </div>,
//           <div>{ay7aga}</div>
//           ]
//         );
        
//       })}
      
//       </div> */}
//   </React.Fragment>
     
//   )
// }

// const mapStateToProps = ({properties}) => {
// return {
//   properties
// }
// }

// export default connect(mapStateToProps) (PropTable)





/* <div>
        <Switch
            size="small"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
      </div>
      <div>
        <Switch
            size="small"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
      </div>
      <div>
       <Select defaultValue="One Value" style={{ width: 110 }} >
            <Option value="oneval">One value</Option>
            <Option value="multival">Multi value</Option>
            <Option value="torf">T or F</Option>
        </Select>
      </div>
      <div>{ay7aga}</div> */
 
// const handleAdd = () => {
//   let newData = {
//     key: 0,
//     name: 'hi',
//     age: <Select defaultValue="One Value" style={{ width: 110 }} onChange={handleChange} >
//     <Option value="oneval">One value</Option>
//     <Option value="multival">Multi value</Option>
//     <Option value="torf">T or F</Option>
//   </Select>,

//   };
// setData(data.concat(newData)) ;

// };



import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Switch, Select, Menu, Dropdown } from 'antd';
import { CloseOutlined, CheckOutlined, DownOutlined } from '@ant-design/icons';

import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const EditableContext = React.createContext();


const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...props
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);
  
    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };
  
    const save = async e => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log('Save failed:', errInfo);
      }
    };
  
    let childNode = children;
  
    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }
  
    return <td {...props}>{childNode}</td>;
  };

const type = 'DragableBodyRow';


const DragableBodyRow = ({ index, moveRow, className, style, ...Props }) => {
    const ref = React.useRef();
    const [form] = Form.useForm();

    const [{ isOver, dropClassName }, drop] = useDrop({
      accept: type,
      collect: monitor => {
        const { index: dragIndex } = monitor.getItem() || {};
        if (dragIndex === index) {
          return {};
        }
        return {
          isOver: monitor.isOver(),
          dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
        };
      },
      drop: item => {
        moveRow(item.index, index);
      },
    });
    const [, drag] = useDrag({
      item: { type, index },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });
    drop(drag(ref));
    return (
        <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
        <tr
        ref={ref}
        className={`${className}${isOver ? dropClassName : ''}`}
        style={{ cursor: 'move', ...style }}
        {...Props}
      />       
       </EditableContext.Provider>
      </Form>
      
    );
  };
  
  

  const { Option } = Select;

 const handleChange =(value)=> {
    console.log(value)
      } 

class PropTable extends React.Component {

  constructor(props) {
    super(props);
    
    this.columns = [
        {
          title: 'Prop Name',
          dataIndex: 'propname',
          width: '25%',
          editable: true,
        },
        {
          title: 'Required LF',
          dataIndex: 'reqlf',
          
        },
        {
          title: 'Required HF',
          dataIndex: 'reqhf',
        },
        {
            title: 'Prop Type',
            dataIndex: 'proptype',
          },
          {
            title: 'test',
            dataIndex: 'test',
          },
        {
            //title: 'operation',
            dataIndex: 'operation',
            width: '5%',
            render: (text, record) =>
              this.state.dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                    <CloseOutlined />
                </Popconfirm>
              ) : null,
          },
      ];
     
    
    }
   
    state = {
      selectedRowKeys: [],
        ay7aga: '',
        dataSource: [
          {
            key: '0',
            propname: 'Area',
            reqlf: <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />,
            reqhf: <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />,
          proptype: <Select defaultValue="One Value" style={{ width: 110 }} onChange={handleChange}>
          <Option value="oneval">One value</Option>
          <Option value="multival">Multi value</Option>
          <Option value="torf">T or F</Option>
        </Select>,
          },
          {
            key: '1',
            propname: 'Diameter',
            reqlf: <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />,
            reqhf:<Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />} 
            defaultChecked
          />,
          proptype: 'uhui',  
  

        //   <Select defaultValue="One Value" style={{ width: 110 }} onChange={handleChange}>
        //   <Option value="oneval">One value</Option>
        //   <Option value="multival">Multi value</Option>
        //   <Option value="torf">T or F</Option>
        // </Select>

          },
        ],
        count: 2,
      };
    components = {
      body: {
        row: DragableBodyRow,
        cell: EditableCell,
      },
    };

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.key !== key),
    });
  };


  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      propname: `New Prop Type ${count}`,
      reqlf: <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />,
    reqhf: <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />,
      proptype: <Select defaultValue="One Value" style={{ width: 110 }} onChange={handleChange}>
      <Option value="oneval">One value</Option>
      <Option value="multival">Multi value</Option>
      <Option value="torf">T or F</Option>
    </Select>,

    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

   moveRow = (dragIndex, hoverIndex) => {
    const { dataSource } = this.state;
    const dragRow = dataSource[dragIndex];

    this.setState(
      update(this.state, {
        dataSource: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        },
      }),
    );
  };

  selectRow = (record) => {
    const selectedRowKeys = [...this.state.selectedRowKeys];
    if (selectedRowKeys.indexOf(record.key) >= 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
    } else {
      selectedRowKeys.push(record.key);
      selectedRowKeys.splice(1, 1);

    }
    this.setState({ selectedRowKeys});
    console.log(selectedRowKeys)
    console.log(record.key)
    console.log(selectedRowKeys.indexOf(record.key))

  }
  onSelectedRowKeysChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
 
   
 
  
  render() {
    const { dataSource } = this.state;
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys,
      onChange: this.onSelectedRowKeysChange,
      onSelect: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };
    
    const columns = this.columns.map(col => {
         if (!col.editable) {
         return col;
    }

        return {
        ...col,
        onCell: record => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
        }),
        };
        });
    return (
      <React.Fragment>
        <DndProvider backend={HTML5Backend}>
            <Table
            rowSelection={rowSelection}
            components={this.components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns}
            onRow={(record, index) => ({
            index,
            onClick: () => {
              this.selectRow(record);
            },
            moveRow: this.moveRow,
            })}
            pagination={false}
            size="middle"


            />
        </DndProvider> 
            <br/>
            <Button
            onClick={this.handleAdd}
            type="primary"
            style={{
            marginBottom: 16,
            }}
            >
            Add a row
            </Button>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = ({properties}) => {
// return {
//   properties
// }
// }

// export default connect(mapStateToProps) (PropTable)


export default PropTable;