//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//引入App组件
import App from './App'
// 全局样式
import './index.css'
import 'antd/dist/antd.css'
//渲染App到界面
ReactDOM.render(
  <BrowserRouter>
  <App/></BrowserRouter>
  ,document.getElementById('root'))