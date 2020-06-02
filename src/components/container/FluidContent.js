import React from 'react'
import { Select, Row, Col, Card } from 'antd'

const FluidContent = () => {

    const {Option} = Select;

    const selectStyle = {
        display:'block',
        width:'12rem',
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
                <Card style={{width:'80%', marginTop:'1.5rem'}}>
                    <h4 style={{marginTop:'-3.7rem', backgroundColor:'#fff', display:'table'}}>properties</h4>
                <br/><br/><br/><br/><br/><br/>

                </Card>
            </Row>         
        </Col>
                
    )
}

export default FluidContent
