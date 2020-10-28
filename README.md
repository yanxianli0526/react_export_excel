可以匯出excel的小工具  

1.npm install -g create-react-app  
2.create-react-app hello-world   (hello-world為folder(專案)名稱)  
3.進folder後npm start   
安裝debugger工具:  
4.debugger新增組態內容:  
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000/",
            "webRoot": "${workspaceFolder}",

        }
    ]
} 
5.若執行後出現錯誤請安裝延伸模組"Debugger for Chrome"  
index.js程式說明:  
6.ReactDOM.render為程式進入點  
輔助工具(可裝可不裝):  
7.可至chrome安裝擴充套件-React-Developer-Tools  
安裝react-bootstrap:  
8.npm install --save react-bootstrap  
9.在public裡的index.html中加入    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">      
10.在要使用的component中加入  import { Button } from 'react-bootstrap' (Button為需要使用到的物件 可改為Table Form...等   可參考:https://react-bootstrap.github.io/components/forms/)
安裝react-router:  
11.npm i react-router-dom  
安裝axios:  
12.npm install axios  
安裝sweetalert  
13.npm install sweetalert --save  (可參考:https://sweetalert.js.org/guides/)  
匯出excel  
14.npm install xlsx  
15.npm install file-saver  
https://www.twblogs.net/a/5dcb8d6abd9eee310da0a20f  
