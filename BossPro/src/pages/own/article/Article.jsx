import axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Article extends Component {
  componentDidMount(){
    this.props.sendAction()
    axios.put("http://localhost:3000/comment",{
      count:this.props.count+1
    })
  }
  // 必须要有更新才会调用
  // componentDidUpdate(){

  // }
  // 组件卸载之前调用
  // componentWillUnmount(){
  //     // 清除定时器
  // }
  render() {
    return (
      <>
        {this.props.count}
      </>
    )
  }
}
const send=(dispatch)=>{
  return {
    sendAction:()=>{
      dispatch({
        type:"commentCount"
      })
    }
  }
}
const receive=(state)=>{
  return state
}
export default connect(receive,send)(Article)