import axios from 'axios'
import React, { Component } from 'react'
import style from './Java.module.css'
import { Tag,BackTop } from 'antd';
import { Link } from 'react-router-dom';
export default class Java extends Component {
  // 定义一个初始的状态用来保存请求到的数据
  state={datas:[]}
  componentDidMount(){
    axios.get("http://localhost:3000/java").then(
      res=>{
        console.log(res.data);
        this.setState({datas:res.data})
      }
    )
  }
  render() {
    return (
      <div className={style.web}>
        <ul>
          {
            this.state.datas.map(item=>
              // 传递路由参数
             <Link to={`/javaDetail/${item.id}`} className="link" key={item.id}>
              <li className={style.lili}>
              <div className={style.t1}>
                <div className={style.t11}>{item.job}</div>
                <div className={style.t12}>{item.salary}</div>
              </div>

              <div className="clear"></div>

               <div className={style.t2}>
              <Tag color="red">{item.demand[0].ask}</Tag>
              <Tag color="gold">{item.demand[1].ask}</Tag>
              <Tag color="green">{item.demand[2].ask}</Tag>
              {/* <Tag color="orange">{item.demand[3].ask}</Tag> */}
              {/* <Tag color="purple">{item.demand[4].ask}</Tag> */}
              </div>

              <div className={style.t3}>{item.info}</div>

              <div className={style.t4}>
                <div className={style.t41}>
                  <img className={style.avatar} src={item.avatar} alt="" />
                  {item.hr}
                </div>
                <div className={style.t42}>
                  {item.position}
                </div>
              </div>
            </li>
             </Link>
              )
          }
        </ul>
        <BackTop>
            <div style={{backgroundColor:"pink"}}>&nbsp;&nbsp;&nbsp;UP</div>
        </BackTop>
      </div>
    )
  }
}

