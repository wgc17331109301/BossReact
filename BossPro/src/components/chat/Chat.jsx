import React, { Component } from 'react'
import style from './Chat.module.css'
import boss from '../../Images/avatar/boss.webp'
import work from '../../Images/avatar/work.webp'
export default class Chat extends Component {
  // 定义初始聊天的内容
  state={msgs:[["hr,你好"],["我是筱乐"],["大学就读于计算机科学与技术专业"]]}
  // 获取文本框中的内容
  myRef = React.createRef()
  // 点击发送
  handleClick=()=>{
    // 定义空数组做容器
    var msg = []
    // 把当前文本框的值存放到数组
    msg.push(this.myRef.current.value)
    // console.log("msg",msg);
    // 把msg追加到state的msgs
    this.state.msgs.push(msg)
    // console.log(this.state.msgs);
    // 引起render的调用
    this.setState({})
    // 清空输入框里面的内容
    this.myRef.current.value=""
    this.setState({})
  }
  render() {
    // console.log(this.props.location.state);
    const {company,name} = this.props.location.state
    return (
      //  标题
      <div className={style.chat}>
          <div className={style.title}>
            <div>{company}</div>
            <h6>({name})</h6>
          </div>
          {/* boss */}
          <div>
            <span><img src={boss} style={{borderRadius:"50%",width:"35px"}} alt="" /></span>
            <span className={style.bossTalk}>看了你的简历，能否深入聊聊</span>
          </div>
          {/* work */}
          <ul>
            {
              this.state.msgs.map((item,index)=>
                <li key={index} className={style.lili}>
                  <div style={{float:"right"}}>
                    <span  className={style.workTalk}>{item}</span>
                    <span><img src={work} style={{borderRadius:"50%",width:"35px"}} alt="" /></span>
                  </div>
                  <div className="clear"></div>
                 </li>
              )
            }
          </ul>
          <div className={style.sendContent}>
            <textarea ref={this.myRef} className={style.textContent} cols="30" rows="10"></textarea>
            <button onClick={this.handleClick} className={style.send}>发送</button>
          </div>
      </div>
    )
  }
}
