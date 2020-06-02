import React from 'react'
import { Select, Row, Col, Card } from 'antd'

const FluidContent = () => {

    const {Option} = Select;

    const selectStyle = {
        display:'block',
        width:'100%',
        margin:'5px'
      };
    return (
             <Col>
                <Row>
                    <Select defaultValue="Fluid Type" style={selectStyle}>
                        <Option value="oneval">One value</Option>
                        <Option value="multival">Multi value</Option>
                        <Option value="torf">T or F</Option>
                    </Select>
            </Row>
            <Row>
                <Select defaultValue="Fluid Name" style={selectStyle}  >
                    <Option value="oneval">One value</Option>
                    <Option value="multival">Multi value</Option>
                    <Option value="torf">T or F</Option>
                </Select>
            </Row> 
            <Row style={{justifyContent:'center', marginBottom:'1rem', marginLeft:'5px', marginRight:'5px'}}>
                <Card style={{width:'100%', marginTop:'1.5rem'}}>
                    <h4 style={{marginTop:'-3.7rem', backgroundColor:'#fff', display:'table'}}>Properties</h4>
                <br/><br/><br/><br/><br/><br/>

                </Card>
            </Row>         
        </Col>
                
    )
}

export default FluidContent
