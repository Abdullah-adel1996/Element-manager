import React from 'react';
import {Row, Col} from 'antd';

const ElementsTableHeader = () => {
    return (
        <div>
        <Row style={{border:'1px solid #ddd', backgroundColor:'#F3F5F6', fontSize:'1.2rem', fontWeight:'500'}}>
            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={1}></Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={6}>Elements</Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={4}>Low Freq..</Col>
            <Col style={{borderRight:'1px solid #ddd', padding:'5px'}} span={4}>High Freq..</Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={4}>Low and..</Col>
            <Col style={{borderRight:'1px solid #dddd', padding:'5px'}} span={4}>outlet</Col>
            <Col style={{padding:'5px'}} span={1}></Col>
        </Row>
        </div>
    )
}

export default ElementsTableHeader
