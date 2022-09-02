import React, { Component } from 'react'

export default class Recommend extends Component {
  render() {
    // console.log(this.props.children);
    return (
      <div style={{padding:"20px"}}>
        <h3>{this.props.children}</h3>
        <p>={">"} 阿里巴巴</p>
        <p>={">"} 腾讯</p>
        <p>={">"} 字节跳动</p>
      </div>
    )
  }
}
