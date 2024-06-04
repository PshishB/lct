import React, { useState } from "react";

import Header from "../header";
import Main from "../main";

 const App = () => {
    const [tab, setTab] = useState('map');
    const onTabClick = (tabName) => {
        setTab(tabName);
    }
    return (
        <div className="App">
            <Header onTabClick={onTabClick} />
            <Main tab={tab}/>
        </div>
    )
};

export default App;