import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './Message.module.css'
export default class Message extends Component {
  state={chatContent:[]}
  componentDidMount(){
    axios.get("http://localhost:3000/chat").then(
      res=>{
        this.setState({chatContent:res.data})
      }
    )
  }
  render() {
    return (
      <div className={style.msg}>
        <div className={style.header}>
            <span>聊天</span><span>互动</span>
        </div>
        <ul className={style.ulul}>
          {
            this.state.chatContent.map(item=>
              // 传递state参数
              <Link key={item.id} className={style.link} to={{pathname:"/chat",state:{company:item.company,name:item.name}}}>
              <li className={style.lili}>
                <div className={style.left}>
                  <img className={style.image} src={item.image} alt="" />
                </div>
                <div className={style.right}>
                  <div>
                    <div className={style.name}>{item.name}</div>
                    <div className={style.company}>{item.company}</div>
                    <br />
                    <div className={style.chats}>{item.chats}</div>
                  </div>
                </div>
                <div className="clear"></div>
              </li>
              </Link>
              )
          }
        </ul>
      </div>
    )
  }
}
