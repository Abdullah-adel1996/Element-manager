import React from 'react';
import { Tabs } from 'antd';
//import "../../App.css";
import FileTabItems from './FileTabItems';


const MainTabs = () => {

    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <Tabs onChange={callback} type="card">
            <TabPane tab="File" key="1">
                 <FileTabItems/>
            </TabPane>
            <TabPane tab="Home" key="2">
                 Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Network" key="3">
                 Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Calculate" key="4">
                 Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Results" key="5">
                 Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Help" key="6">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    )
}

export default MainTabs;