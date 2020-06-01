import React from 'react'
import { Select, Row, Col, Card } from 'antd'

const FluidContent = () => {

    const {Option} = Select;

    const selectStyle = {
        display:'block',
        width:'20rem',
        margin:'1rem'
      };
    return (
             <Col>
                <Row style={{justifyContent:'center'}}>
                    <Select defaultValue="Fluid type" style={selectStyle}>
                        <Option value="oneval">One value</Option>
                        <Option value="multival">Multi value</Option>
                        <Option value="torf">T or F</Option>
                    </Select>
               
            </Row>
            <Row style={{justifyContent:'center'}}>
                <Select defaultValue="Fluid name" style={selectStyle}  >
                    <Option value="oneval">One value</Option>
                    <Option value="multival">Multi value</Option>
                    <Option value="torf">T or F</Option>
                </Select>
            </Row> 
            <Row style={{justifyContent:'center', marginBottom:'1rem'}}>
                <Card style={{width:'80%'}} title="Properties">
                <br/><br/><br/><br/><br/><br/>

                </Card>
            </Row>
                    
                </Col>
                
    )
}

export default FluidContent
