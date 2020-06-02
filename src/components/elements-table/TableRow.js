import React, {useState} from 'react';
import {Row, Col, Select} from 'antd';

const TableRow = (props) => {

    const [test, setTest] = useState(null)
    const {Option} = Select;

    const handleChange = (value) => {
        setTest(value)
    }

    return (
        <React.Fragment>
        {
            props.data.length > 0 ? (
                props.data.map(
                    el => (
                        <Row key={el.id} style={{border:'1px solid #ddd', 
                            borderTop:'0', 
                            backgroundColor:'#fff', 
                            fontSize:'1.5rem', 
                            fontWeight:'100'}}>
                                <Col 
                                style={{borderRight:'1px solid #ddd', padding:'1rem'}} 
                                span={8}>
                                    {el.propName}
                                </Col>
                                <Col 
                                style={{borderRight:'1px solid #dddd', padding:'1rem'}} 
                                span={8}>
                                <Select 
                                defaultValue={el.selectedval} 
                                style={{ width: 110 }} 
                                onChange={handleChange}>
                                    <Option value="oneval">{el.defaultValue.oneval}</Option>
                                    <Option value="multival">{el.defaultValue.multival}</Option>
                                    <Option value="torf">{el.defaultValue.torf}</Option>
                                </Select>
                                </Col>
                                <Col 
                                style={{padding:'1rem'}} 
                                span={8}>
                                    {test}
                                </Col>
                        </Row>
                    )
                )
            ) : (
                    <Row style={{border:'1px solid #ddd', 
                            borderTop:'0', 
                            backgroundColor:'#fff', 
                            fontSize:'1.5rem', 
                            fontWeight:'100'}}>

                            <Col>No Data </Col>
                    </Row>
                    
                  ) }
        </React.Fragment>
      
        
    )
}

export default TableRow
