import React, { useState } from 'react';
import { HashRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import FirstPage from "../router_page/FirstPage";


import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const App = (props) => {
  return (
    <HashRouter>
      {/* 透過點Link可以轉換URL */}
      <Nav variant="tabs" defaultActiveKey="aa">
        <Nav.Item>
          <Nav.Link href="#home">首頁</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* Switch裡面會偵測URL 的不同而嵌入不同的component */}
      <Switch>
        {/* 加exact是因為 原始的Router是有包含設定的字串，就會顯示該頁面，加入後會判斷完全相同才進入*/}
        <Route exact path="/" component={FirstPage} />
      </Switch>
    </HashRouter>
  );
}


export default App; //輸出App函式
