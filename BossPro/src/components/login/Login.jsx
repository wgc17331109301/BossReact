import React, { Component } from 'react'
import style from './Login.module.css'
import { Button,message } from 'antd';
import loginBgc from '../../Images/login.webp'
const warning = () => {
  message.warning('你输入的手机号位数不正确');
};
const success = (x) => {
  message.success(`你的验证码是${x}`);
};
const error = () => {
  message.error('你输入的验证码错误');
};
export default class Login extends Component {
  // 定义初始状态isShowLogin：切换页面的状态
  state={isShowLogin:true,currentPhone:"",countDown:60,isDisabled:true,code:0}
  // 输入的手机号
  myRef = React.createRef()
  // 验证码
  myRef2 = React.createRef()
  // 切换页面
  handleClick=()=>{
    // 手机号码是否为11位
    if(this.myRef.current.value.length===11){
      this.setState({isShowLogin:false})
      // console.log(this.myRef.current.value);
      this.setState({currentPhone:this.myRef.current.value})
      this.myRef.current.value=""
      // var x = Math.floor(Math.random()*(max-min+1))+min
      var x = Math.floor(Math.random()*(999999-100000+1))+100000
      // console.log(x);
      this.setState({code:x})
      success(x)
      // 60秒倒计时
      this.timer = setInterval(() => {
        if(this.state.countDown===0){
          // 清除定时器
          clearInterval(this.timer)
          // 将禁用按钮变为可用状态
          this.setState({isDisabled:false})
          this.setState({countDown:60})
        }else{
          this.setState({countDown:this.state.countDown-1})
        }
      }, 1000);
    }else{
      // 手机号码不准确提示
      warning()
    }
  }
  // 判断验证码
  logined=()=>{
    // console.log(this.myRef2.current.value);
    if(this.myRef2.current.value===`${this.state.code}`){
      this.props.history.push("/home/web")
    }else{
      error()
    }
  }
  
  render() {
    return (
      <div>
        <img src={loginBgc} width="100%" height="260" alt="" />
        {
          this.state.isShowLogin?
          <div className={style.login}>
          <div className={style.phone}>请输入你的手机号</div>
          <input type="text" ref={this.myRef} className={style.phoneIpt} placeholder="请输入手机号" />
          <Button type="primary" onClick={this.handleClick} className={style.phoneBtn}>获取验证码</Button>
        </div>:
        <div className={style.login}>
            <p className={style.phone}>已发送至:+86 {this.state.currentPhone}</p>
            <input type="text" ref={this.myRef2} className={style.phoneIpt} placeholder="请输入验证码" />
            <Button type="primary" onClick={this.logined} className={style.phoneBtn}>登录</Button>
            {/* 重新获取验证码 */}
            <Button type="primary" disabled={this.state.isDisabled} className={style.phoneBtn} onClick={()=>{success()}}>重新获取{this.state.countDown}</Button>
        </div>
        }
      </div>
    )
  }
}
