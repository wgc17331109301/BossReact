import axios from 'axios'
import React, { Component } from 'react'

export default class Answer extends Component {
  state={commentCount:0}
  componentDidMount(){
    axios.get("http://localhost:3000/comment").then(
      res=>{
        // console.log(res.data);
        this.setState({commentCount:res.data.count})
      }
    )
  }
  render() {
    return (
      <>
        我总共被浏览了：total------{this.state.commentCount}
      </>
    )
  }
}
