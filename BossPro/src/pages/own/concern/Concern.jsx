import React, { Component } from 'react'

export default class Concern extends Component {
  render() {
    // console.log(this.props);
    const {title} = this.props
    return (
      <div style={{padding:"20px"}}>
        <h3>{title}</h3>
        <p>1、负责公司物联网产品PC端和微信和钉钉小程序H5前端开发与维护工作；</p>
        <p>2、配合产品完成项目迭代，优化和提升用户体验；</p>
        <p>3、负责承担性能优化工作；</p>
        <p>4、预研前端技术和方案，协助技术难题攻关</p>
        <p>5、编写前端技术文档；</p>
      </div>
    )
  }
}
