import React, { Component } from 'react'
// import ParticlesBg from 'particles-bg'
import { Button, Descriptions,Modal,Input } from 'antd';
import axios from 'axios';
export default class Resume extends Component {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // 定义简历信息
  state={UserName:"",Telephone:"",Live:"",Remark:"",skill:"",isModalVisible:false}
  // 获取model框中输入的值
  myRef1 = React.createRef()
  myRef2 = React.createRef()
  myRef3 = React.createRef()
  myRef4 = React.createRef()
  myRef5 = React.createRef()
  showModal = () => {
    // setIsModalVisible(true);
    this.setState({isModalVisible:true})
  };

  handleOk = () => {
    // setIsModalVisible(false);
    this.setState({isModalVisible:false})
    // 获取antd组件中的输入框的值，我们需要加一个state.value
    // console.log(this.myRef1.current.state.value);
    this.setState({UserName:this.myRef1.current.state.value})
    this.setState({Telephone:this.myRef2.current.state.value})
    this.setState({Live:this.myRef3.current.state.value})
    this.setState({Remark:this.myRef4.current.state.value})
    this.setState({skill:this.myRef5.current.state.value})
    // 发送axios.patch()
    axios.patch("http://localhost:3000/resume",{
      UserName:this.myRef1.current.state.value,
      Telephone:this.myRef2.current.state.value,
      Live:this.myRef3.current.state.value,
      Remark:this.myRef4.current.state.value,
      skill:this.myRef5.current.state.value
    })
  };

  handleCancel = () => {
    // setIsModalVisible(false);
    this.setState({isModalVisible:false})
  };

  componentDidMount(){
    axios.get('http://localhost:3000/resume').then(
      res=>{
        // console.log(res);
        const {UserName,Telephone,Live,Remark,skill} = res.data
        // this.setState({UserName:UserName,Telephone:Telephone,Live:Live,
        //   Remark:Remark,skill:skill})
          this.setState({UserName,Telephone,Live,Remark,skill})
      }
    )
  }
  render() {
    const {UserName,Telephone,Live,Remark,skill} = this.state
    return (
      <div>
        <Descriptions title="修改简历">
            <Descriptions.Item label="UserName">{UserName}</Descriptions.Item>
            <Descriptions.Item label="Telephone">{Telephone}</Descriptions.Item>
            <Descriptions.Item label="Live">{Live}</Descriptions.Item>
            <Descriptions.Item label="Remark">{Remark}</Descriptions.Item>
            <Descriptions.Item label="Skill">{skill}</Descriptions.Item>
        </Descriptions>
        <Button type="primary" onClick={this.showModal} style={{width:"60%",marginLeft:"20%"}}>修改简历</Button>
        <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
        <Input style={{marginTop:"20px"}} ref={this.myRef1} placeholder="UserName" />
        <Input style={{marginTop:"20px"}} ref={this.myRef2} placeholder="Telephone" />
        <Input style={{marginTop:"20px"}} ref={this.myRef3} placeholder="Live" />
        <Input style={{marginTop:"20px"}} ref={this.myRef4} placeholder="Remark" />
        <Input style={{marginTop:"20px"}} ref={this.myRef5} placeholder="skill" />
      </Modal>
      </div>
    )
  }
}
