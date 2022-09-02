import React, { Component } from 'react'
import style from './User.module.css'
import avatar from '../../Images/avatar/loginAvatar.webp'
import { Popover,Menu, Dropdown} from 'antd'
import {DashOutlined,DownOutlined} from '@ant-design/icons'
import user1 from '../../Images/user/01.png'
import user2 from '../../Images/user/02.png'
import user3 from '../../Images/user/03.png'
import user4 from '../../Images/user/04.png'
import user5 from '../../Images/user/05.png'
import tail1 from '../../Images/userTail/1.png'
import tail2 from '../../Images/userTail/2.png'
import tail3 from '../../Images/userTail/3.png'
import tail4 from '../../Images/userTail/4.png'
import tail5 from '../../Images/userTail/5.png'
import tail6 from '../../Images/userTail/6.png'
import tail7 from '../../Images/userTail/7.png'
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const menu = (
  <Menu>
    <Menu.Item>
        账号与绑定
    </Menu.Item>
    <Menu.Item>
        通知与提醒
    </Menu.Item>
    <Menu.Item>
        隐私设置
    </Menu.Item>
  </Menu>
);
export default class User extends Component {
  // 去往登录页面
  goLogin=()=>{
    this.props.history.push('/login')
  }
  // 去往简历页面
  goResume=()=>{
    this.props.history.push('/resume')
  }
  render() {
    return (
      <div>
        <div className={style.header}>
        {/* 图标 */}
        <div className={style.icon}>
        <Popover placement="bottomRight" content={content} trigger="click">
        <DashOutlined />
        </Popover>&nbsp;&nbsp;&nbsp;
        <Dropdown overlay={menu}>
        <DownOutlined />
        </Dropdown>
        </div>
        {/* 左侧 */}
        <div className={style.left}>
          <h2 onClick={this.goLogin}>登录</h2>
          <h6 onClick={this.goResume}>在线编辑简历</h6>
        </div>
        {/* 右侧 */}
        <div className={style.right}>
          <img src={avatar} width="60" style={{borderRadius:"50%"}} alt="" />
        </div>
        </div>
        {/* 主体内容部分 */}
         {/* 主题内容部分 */}
         <div className={style.content}>
          <div>
            <p>求职助手</p>
            <div className={style.ask}><div className={style.askC}>简历刷新</div><div className={style.askC}><img width="30px" src={user1} alt="" /></div></div>
            <div className={style.ask}><div className={style.askC}>竞争力分析</div><div className={style.askC}><img width="30px" src={user2} alt="" /></div></div>
          </div>
          <br />
          <br />
          <div>
            <p className={style.funFont}>常用功能</p>
            <br />
            <div className={style.fun}><div><img  width="30px" src={user3} alt="" /></div><div>在线简历</div></div>
            <div className={style.fun}><div><img  width="30px" src={user4} alt="" /></div><div>附件简历</div></div>
            <div className={style.fun}><div><img  width="30px" src={user5} alt="" /></div><div>求职意向</div></div>
          </div>
        </div>
        <div className="clear"></div>
        <br />
        {/* 尾部 */}
        <div className={style.borderLine}></div>
        <div className={style.tail}>
            <p>其他功能</p>
            <div>
              <div className={style.tailC}><div><img src={tail1} width="25px" alt="" /></div><div>个人主页</div></div>
              <div className={style.tailC}><div><img src={tail2} width="25px" alt="" /></div><div>吱吱公益</div></div>
              <div className={style.tailC}><div><img src={tail3} width="25px" alt="" /></div><div>帮助反馈</div></div>
              <div className={style.tailC}><div><img src={tail4} width="25px" alt="" /></div><div>我的客服</div></div>
              <div className={style.tailC}><div><img src={tail5} width="25px" alt="" /></div><div>违规公告</div></div>
              <div className={style.tailC}><div><img src={tail6} width="25px" alt="" /></div><div>关于</div></div>
              <div className={style.tailC}><div><img src={tail7} width="25px" alt="" /></div><div>薪资查询</div></div>
              <div className="clear"></div>
              <div className={style.info}>
              <p>客服电话 400-000-888    工作时间 9:30-18:30</p><br />
              <p>未成年人投诉举报渠道同上</p><br />
              <p>人力资源服务许可证  营业执照  朝阳区人局监督电话</p>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
