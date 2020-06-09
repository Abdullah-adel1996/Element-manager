import React from 'react';
import { Row, Col, Popconfirm, Switch, Input } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


const ElementsTableRow = (props) => {
    return (
        <Row 
        onClick={() => props.handleClick(props.id)}
            style={{border:'1px solid #ddd', 
            borderTop:'0', 
            backgroundColor: props.styless.backgroundColor,
            fontSize:'1.5rem', 
            fontWeight:'100'}}>

            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={1}>
                {props.handler}
            </Col>

            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={6}>
                    <Input 
                    style={{border:'0'}}
                    size="small" 
                    onChange={(e)=> props.handleEdit(props.index, 'elementName', e.target.value)} 
                    value={props.name} />
                </Col>

            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={4}>
                    <Switch
                        onChange={(checked)=> props.handleEdit(props.index, 'lowFreq', checked)}
                        size='small'
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                    />
                </Col>
            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={4}>
                    <Switch
                        onChange={(checked)=> props.handleEdit(props.index, 'highFreq', checked)}
                        size='small'
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                    />
                </Col>         
            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={4}>
                    <Switch
                        onChange={(checked)=> props.handleEdit(props.index, 'lowAndHigh', checked)}
                        size='small'
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                    />
                </Col>      
            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={4}>
                    <Switch
                        onChange={(checked)=> props.handleEdit(props.index, 'outlet', checked)}
                        size='small'
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        defaultChecked
                    />
                </Col>
                <Col style={{padding:'5px'}} span={1}>
                    <Popconfirm title="Sure to delete?" onConfirm={() => props.handleDelete(null,props.id)}>
                            <CloseOutlined /> 
                    </Popconfirm>
                </Col>
        </Row>
    )
}

export default ElementsTableRow
