import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { DndProvider, useDrag, useDrop } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

const EditableContext = React.createContext();

// const EditableRow = ({ index, ...props }) => {
//     const [form] = Form.useForm();
//     return (
//       <Form form={form} component={false}>
//         <EditableContext.Provider value={form}>  
//           <tr {...props} />
//         </EditableContext.Provider>
//       </Form>
//     );
//   };

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
      />        </EditableContext.Provider>
      </Form>
      
    );
  };

class ElementTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
        {
            title: 'Element',
            dataIndex: 'element',
            key: 'element',
            width: '20%',
            editable: true,
          },
          {
            title: 'High Freq',
            dataIndex: 'highfreq',
            key: 'highfreq',
          },
          {
            title: 'Low Freq',
            dataIndex: 'lowfreq',
            key: 'lowfreq',
          },
          // {
          //   title: 'Low and High',
          //   dataIndex: 'lowandhigh',
          //   key: 'lowandhigh',
          // },
          // {
          //   title: 'Outlet',
          //   dataIndex: 'outlet',
          //   key: 'outlet',
          // },
      {
       // title: 'operation',
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
    this.state = {
      selectedRowKeys: [],

      dataSource: [
        {
          key: '0',
          element: 'Open End',
          highfreq: <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />,
          lowfreq: <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />,
      //   lowandhigh: <Switch
      //   checkedChildren={<CheckOutlined />}
      //   unCheckedChildren={<CloseOutlined />}
      //   defaultChecked
      // />,
      // outlet: <Switch
      //   checkedChildren={<CheckOutlined />}
      //   unCheckedChildren={<CloseOutlined />}
      //   defaultChecked
      // />,
        },
        {
          key: '1',
          element: 'Fan',
          highfreq: <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          
        />,
          lowfreq: <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />,
        lowandhigh: <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />,
      outlet: <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />,
        },
        {
          key: '2',
          element: 'Term Diffuser',
          highfreq: <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />,
          lowfreq: <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          
        />,
        lowandhigh: <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />,
      outlet: <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />,
        },
      ],
      count: 3,
    };
  }

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
      element: `New One Port ${count}`,
      highfreq: <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />,
      lowfreq: <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
    />,
    lowandhigh: <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />,
      outlet: <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />,
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
    
    const { dataSource,selectedRowKeys } = this.state;

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
              rowSelection={{
              type: 'radio',
              ...rowSelection,
              }}
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

export default ElementTable;