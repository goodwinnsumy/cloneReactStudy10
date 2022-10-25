import React, {Component} from 'react';



class Counter extends Component {
  state={
    count:0,
    value:8
  }


  countClickHandler(e,qqq){
    this.setState((state) => ({
      count: state.count + 1
    }));
    // console.log(this.state.count);
    // console.log(this.state.value);
    // console.log(e);
    // console.log(qqq);

  }


  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")

  }

  render() {
    const qqq = "3"
    return (

      <div>
        {this.props.name}
        <button onClick={(e)=>this.countClickHandler(e,qqq)}>Click {this.state.count}</button>
      </div>
    );
  }
}

export default Counter;