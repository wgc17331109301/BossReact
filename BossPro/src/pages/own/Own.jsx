import React, { Component } from 'react'
import song1 from '../../songs/不是花火呀 - TA.mp3'
import { Carousel } from 'antd';
import style from './Own.module.css'
import h1 from '../../Images/own/h1.png'
import h2 from '../../Images/own/h2.png'
import avatar from '../../Images/own/avatar1.png'
import c1 from '../../Images/own/1.png'
import c2 from '../../Images/own/2.png'
import c3 from '../../Images/own/3.png'
import c4 from '../../Images/own/4.png'
import c5 from '../../Images/own/5.png'
import axios from 'axios';
import Concern from './concern/Concern';
import Recommend from './recommend/Recommend';
import Article from './article/Article';
import Answer from './answer/Answer';
export default class Own extends Component {
  // 定义初始状态保存轮播图的数据
  state={swipers:[]}
  myRef = React.createRef()
  // 获取轮播图数据
  componentDidMount(){
    axios.get("http://localhost:3000/swipers").then(
      res=>{
        this.setState({swipers:res.data})
      }
    )
  }
  playMusic=()=>{
    // console.log(this.myRef.current);
    this.myRef.current.play()
  }
  render() {
    return (
      <div>
        {/* 头部 */}
        <div className={style.header}>
          <div className={style.headerC1}>有了</div>
          <div className={style.headerC2}><img width="20px" src={h1} alt="" />搜索职位/公司/内容</div>
          <div className={style.headerC3}><img width="20px" onClick={this.playMusic} className={style.img} src={h2} alt="" />
          {/* 歌曲 */}
          <audio src={song1} ref={this.myRef}></audio></div>
          <div className={style.headerC4}><img width="20px" className={style.img} src={avatar} alt="" /></div>
        </div>
        {/* 轮播图部分 */}
        <Carousel autoplay={true}>
          {
            this.state.swipers.map(item=>
              <img width="100%" height="200px" src={item.image} alt="" key={item.id} />
              )
          }
        </Carousel>

        {/* 中间部分 */}
        <div className={style.contentItem}><div><img width="20px" src={c1} alt="" /></div><div>有了牧场</div></div>
        <div className={style.contentItem}><div><img width="20px" src={c2} alt="" /></div><div>今日热榜</div></div>
        <div className={style.contentItem}><div><img width="20px" src={c3} alt="" /></div><div>学生圈</div></div>
        <div className={style.contentItem}><div><img width="20px" src={c4} alt="" /></div><div>求职冒险</div></div>
        <div className={style.contentItem}><div><img width="20px" src={c5} alt="" /></div><div>职业图鉴</div></div>
      
        
        {/* 父亲给孩子传值 */}
        {/* 方法1 */}
        <Concern title="关注" />
        <br />
        <Recommend>推荐</Recommend>
        {/* 文章组件既是发送方，又是接收 */}
        <Article/>
        {/* 回答组件是接收方 */}
        <Answer/>
      </div>
    )
  }
}
