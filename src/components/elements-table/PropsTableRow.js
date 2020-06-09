import React from 'react';
import {Row, Col, Select, Switch, Input, Popconfirm} from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const PropsTableRow = (props) => {

    const {Option} = Select;

    return (
                <Row onClick={() => props.handleClick(props.id)} style={{border:'1px solid #ddd', 
                    borderTop:'0', 
                    backgroundColor: props.styless.backgroundColor, 
                    fontSize:'1.5rem', 
                    fontWeight:'100'}}>
                        <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={1}>
                         {props.handler}
                        </Col>
                        <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={3}>
                            <Switch
                                onChange={(checked)=> props.handleEdit(props.index, 'requiredLf', checked)}
                                size='small'
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                            />
                        </Col>
                        <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={3}>
                            <Switch
                                onChange={(checked)=> props.handleEdit(props.index, 'requiredHf', checked)}
                                size='small'
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                defaultChecked
                            />
                        </Col>
                        <Col 
                        style={{borderRight:'1px solid #ddd', padding:'5px'}} 
                        span={5}>
                            <Input 
                            style={{border:'0'}}
                            size="small" 
                            onChange={(e)=> props.handleEdit(props.index, 'propName', e.target.value)} 
                            value={props.name} />
                        </Col>
                        <Col 
                        style={{borderRight:'1px solid #dddd', padding:'5px'}} 
                        span={5}>
                        <Select 
                        defaultValue={props.default} 
                        style={{ width: '100%', border:'0' }} 
                        onChange={(value)=> props.handleEdit(props.index, 'selectedVal', value)}>
                            <Option value="oneval">{props.option1}</Option>
                            <Option value="multival">{props.option2}</Option>
                            <Option value="torf">{props.option3}</Option>
                        </Select>
                        </Col>
                        <Col 
                        style={{borderRight:'1px solid #ddd', padding:'5px'}} 
                        span={4}>
                            <Input 
                            style={{border:'0'}}
                            size="small" 
                            onChange={(e)=> props.handleEdit(props.index, 'unit', e.target.value)} 
                            value={props.selected} />
                        </Col>
                        <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={2}>
                            <Input 
                                style={{border:'0'}}
                                size="small" 
                                onChange={(e)=> props.handleEdit(props.index, 'unit', e.target.value)} 
                                value={props.unit} />
                        </Col>
                        <Col 
                        style={{padding:'5px'}} 
                        span={1}>
                        <Popconfirm title="Sure to delete?" onConfirm={() => props.handleDelete(props.id,null)}>
                             <CloseOutlined /> 
                        </Popconfirm>
                        </Col>
                    </Row>
      
        
    )
}

export default PropsTableRow
