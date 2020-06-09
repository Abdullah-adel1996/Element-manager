import React from 'react'
import { Row, Col } from 'antd'

const PropsTableHeader = () => {
    return (
        <Row style={{border:'1px solid #ddd', backgroundColor:'#F3F5F6', fontSize:'1.2rem', fontWeight:'500'}}>
            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={1}></Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={3}>Required Lf</Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={3}>Required Hf</Col>
            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={5}>Property Name</Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={5}>Property Type</Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={4}>Default Value</Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={2}>Unit</Col>
            <Col style={{padding:'5px'}} span={1}></Col>
        </Row>
    )
}

export default PropsTableHeader
