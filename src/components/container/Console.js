import React from 'react';
import { Card } from 'antd';
import ResizePanel from "react-resize-panel";


const Console = () => {
    return (
        <ResizePanel direction="n" >
        <div>
            <Card style={{width:'100%', height:'13vh'}}>
            <h4 style={{marginTop:'-3.5rem', backgroundColor:'#fff', display:'table'}}>Console</h4>
            </Card>
        </div>
        </ResizePanel>
    )
}

export default Console
