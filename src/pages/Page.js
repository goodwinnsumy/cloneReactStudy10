import React, {Component} from 'react';
import ColorText from "../components/ColorText/ColorText";
import Counter from "../components/Counter/Counter";

class Page extends Component {

  state = {
    showCounter:true,
    color:"blue",
    initialValue: 2
  }

  render() {
    return (
      <div>

        <button onClick={()=>this.setState({color:"grey"})}>grey </button>

        <ColorText text={"Легко учить React!!!"} color={"red"}/>
        <ColorText text={"Добрый вечер!"} color={this.state.color}/>

        <ColorText text={"Компонент меняющий цвет"} colorArr={["black","grey","blue"]} />
        <ColorText text={"Компонент меняющий цвет"} colorArr={["green","grey","blue"]} />
        <ColorText text={"Компонент меняющий цвет"} colorArr={["red","grey","orange","purple"]} />


        {/*<button onClick={*/}
        {/*  ()=>this.setState({showCounter:!this.state.showCounter})}>*/}
        {/*  ShowCounter*/}
        {/*</button>*/}

        {/*{this.state.showCounter && <Counter isVisible={true}/>}*/}

      </div>
    );
  }
}

export default Page;