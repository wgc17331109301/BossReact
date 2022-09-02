import React from 'react'
import './App.css'
import { NavLink,Route,Redirect } from 'react-router-dom'
import Home from './pages/home/Home'
import Message from './pages/message/Message'
import Own from './pages/own/Own'
import User from './pages/user/User'
import Detail from './components/detail/Detail'
import JavaDetail from './components/javaDetail/JavaDetail'
import { Provider } from 'react-redux'
import store from './store/store'
import Chat from './components/chat/Chat'
import Login from './components/login/Login'
import './Images/font/iconfont.css'
import Resume from './components/resume/Resume'
class App extends React.Component{
  render(){
  return(
    <div id="App">
      <Provider store={store}>
      <div className="tabBar">
      <NavLink activeClassName="active" to="/home/web">
        <div className="navItem"><i className="iconfont">&#xe618;</i><br/> 职位</div>
        </NavLink>
      <NavLink activeClassName="active" to="/own">
      <div className="navItem"><i className="iconfont">&#xe685;</i><br/>有了</div>
      </NavLink>
      <NavLink activeClassName="active" to="/message">
      <div  className="navItem"><i className="iconfont">&#xe619;</i><br/>消息</div>
      </NavLink>
      <NavLink activeClassName="active" to="/user">
      <div  className="navItem"><i className="iconfont">&#xe63c;</i><br/>用户</div>
      </NavLink>
      </div>
      <Route path="/home" component={Home}/>
      <Route path="/own" component={Own}/>
      <Route path="/message" component={Message}/>
      <Route path="/user" component={User}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/javaDetail/:id" component={JavaDetail}/>
      <Route path="/chat" component={Chat}/>
      <Route path="/login" component={Login}/>
      <Route path="/resume" component={Resume}/>
      <Redirect to="/home/web" />
      <br/>
      <br/>
      <br/>
      <br/>
      </Provider>
    </div>
    
  )
}
}
export default App