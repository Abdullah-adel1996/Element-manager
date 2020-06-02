import React from 'react'
import { Row, Col } from 'antd'

const TableHeader = () => {
    return (
        <Row style={{border:'1px solid #ddd', backgroundColor:'#F3F5F6', fontSize:'1.5rem', fontWeight:'500'}}>
            <Col style={{borderRight:'1px solid #ddd', padding:'1rem'}} span={8}>Elements</Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'1rem'}} span={8}>Default value</Col>
            <Col style={{padding:'1rem'}} span={8}>Unit</Col>
        </Row>
    )
}

export default TableHeader
