import React, {Component} from 'react';
import "./ColorText.scss"

class ColorText extends Component {

  state = {
    color: "red",
    // colorArr:["red","grey","blue"],
    colorNum: 0
  }

  componentDidMount() {
    const {colorArr} = this.props
    if(colorArr){
      this.setState({color:colorArr[0]})
    }
  }


  colorHandler() {
    // console.log("asdf")
    if (this.state.colorNum < this.props.colorArr.length - 1) {
      this.setState((prevState)=>({colorNum: prevState.colorNum + 1}))
      this.setState({color: this.props.colorArr[this.state.colorNum + 1]})
    } else {
      this.setState({colorNum: 0})
      this.setState({color: this.props.colorArr[0]})
    }

  }

  render() {
    // const {colorArr} = this.props

    const style = {
      color: this.props.color || this.state.color
    }

    return (
      <div>
        {/*<p style={{color:this.props.color}} className={"p"}> {this.props.name} </p>*/}
        <p onClick={() => this.colorHandler()} style={style} className={"p"}> {this.props.text} </p>

        {/*<p onClick={() => this.colorHandler()} style={{color:"black"}} className={"p"}> {this.props.name} </p>*/}

      </div>
    );
  }
}

export default ColorText;