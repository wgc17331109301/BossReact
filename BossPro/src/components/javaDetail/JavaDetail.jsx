import axios from 'axios'
import React, { Component } from 'react'
import style from './JavaDetail.module.css'
import {
  LeftOutlined,
  HeartOutlined,
  ForkOutlined,
  RightOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
export default class JavaDetail extends Component {
  
  state={detailData:[]}
  componentDidMount(){
       // 路由传参：params参数，从Web.jsx里面传递id过来
       const { id } = this.props.match.params
      //  console.log(id);
    axios.get('http://localhost:3000/java').then(
      res=>{
        // console.log(res);
        this.setState({detailData:res.data[id-1]})
        // console.log(this.state.detailData);
      },
      err=>{
        console.log(err);
      }
    )
  }
  // 回到上一级
  returnPrevious=()=>{
    this.props.history.go(-1)
  }
  // 点击去往聊天的界面
  goChat=()=>{
    this.props.history.push('/chat')
  }
  render() {
    const {detailData} = this.state
    return (
      <div className={style.detail}>
        <div>
          <div onClick={this.returnPrevious} className={style.headerLeft}><LeftOutlined /></div>
          <div className={style.headerRight}><HeartOutlined />  <ForkOutlined />  <ExclamationCircleOutlined /></div>
        </div>
        <div className={style.clear}></div>
        <ul>
        {<li key={detailData.id} className={style.lili}>
            <div><h3 className={style.job}>{detailData.job}</h3><div className={style.salary}>{detailData.salary}</div></div>
            <div className={style.clear}></div>
            <div>
              <div className={style.avatar}><img src={detailData.avatar} style={{width:"40px",height:"50px"}} alt="" /></div>
              <div className={style.hr}>
                <div>{detailData.hr}</div>
                <div className={style.fontSizeSmall}>刚刚活跃</div>
              </div>
              <div className={style.rightRrrow}><RightOutlined /></div>
              <div className={style.clear}></div>
            </div>
          </li>}
        </ul>
        <hr />
        <div className={style.introduce}>
          <h3>职位详情</h3>
          职位职责：
          <p>1、负责公司物联网产品PC端和微信和钉钉小程序H5前端开发与维护工作；</p>
          <p>2、配合产品完成项目迭代，优化和提升用户体验；</p>
          <p>3、负责承担性能优化工作；</p>
          <p>4、预研前端技术和方案，协助技术难题攻关；</p>
          <p>5、编写前端技术文档；</p>
          <hr />
          技能要求：
          <p>1、全日制本科及以上，熟悉JS语言，熟悉vue前端框架优先，有独立搭建项目经验；</p>
          <p>2、熟悉常用的项目构建工具，如: webpack等；</p>
          <p>3、熟练使用git进行项目管理，有团队协作开发经验；</p>
          <p>4、熟悉css预处理器；</p>
          <p>5、熟悉智慧园区，智慧社区物联网开发经验优先；</p>
          <p>6、有封装过前端组件化、搭建过前端微服务化工作经验者优先；</p>
          <div className={style.btnBox}>
          <button onClick={this.goChat} className={style.btn}>立 即 沟 通</button>
          </div>
        </div>
      </div>
    )
  }
}
