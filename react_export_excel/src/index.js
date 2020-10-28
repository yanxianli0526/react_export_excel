import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './APP/App';  //開頭一定要大寫
// import Class_Component from './component/Class_Component_State';  
import * as serviceWorker from './serviceWorker';

// 將id show-area的內容改變 (給App.js的子類別使用)
const printMessage = () => {
  document.getElementById('show-area').innerHTML = document.getElementById('show-area').innerHTML === "" ? "我被按到了" : "";
}

ReactDOM.render(
  //組成dom <div>
  //組成dom   <Progress />
  //組成dom </div>,
  <div>
    < App name={"我的名字"} version={4} data={"none"} handleClick={printMessage} />
    <div id="show-area"></div> {/* 這裡是透過App中的button Onclick事件用來改變的地方*/}
  </div >,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

