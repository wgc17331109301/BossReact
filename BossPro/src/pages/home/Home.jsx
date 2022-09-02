import React, { Component } from 'react'
import { NavLink,Route } from 'react-router-dom'
import style from './Home.module.css'
import Java from './java/Java'
import Web from './web/Web'
export default class Home extends Component {
  render() {
    return (
      <div className={style.home}>
        <div className={style.header}>
          <div>
            <div className={style.post}>全职</div>
            <div className={style.post}>兼职</div>
            <div className={style.post}>实习</div>
          </div>
          {/* 清除浮动 */}
          <div className="clear"></div>
          <div className={style.web}>
              <NavLink activeClassName={style.active} to="/home/web">Web前端</NavLink>
          </div>
          <div className={style.java}>
          <NavLink activeClassName={style.active} to="/home/java">Java</NavLink>
          </div>
        </div>
        <div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Route path="/home/web" component={Web}/>
        <Route path="/home/java" component={Java}/>
      </div>
    )
  }
}
