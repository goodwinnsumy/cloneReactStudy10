import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import List from "./components/List/List";
import {Component} from "react";
import Page from "./pages/Page";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import CssModules from "./components/CssModules/CssModules";
import StyledComponents from "./components/StyledComponents/StyledComponents";
import Comments from "./components/Comments/Comments";

class App extends Component {

  state={
    arr:[1,2,3,4,5,6,"qw","adsf"],
    visibleCounter:true
  }

  arrAddHandler(el){
    let arr = this.state.arr
    arr.push(el)
    this.setState({arr})
    console.log(arr)
  }

  render() {

    const hello = "Доброго вечора!!!",
      hello1 = {a: 1, s: 4},
      visible = false;

    return (

      <>

          {/*<img src="https://via.placeholder.com/600/92c952" alt=""/>*/}
          
        <Header/>

          <CssModules/>

          <StyledComponents/>



        <Posts/>

        <Page/>

        <List addHandler={(el)=>this.arrAddHandler(el)} name={"List"} arr={this.state.arr}/>

        {this.state.visibleCounter&&<Counter name={"Counter"}/>}
        <button onClick={()=>this.setState({visibleCounter:!this.state.visibleCounter})}> Click</button>

        <Comments/>

      </>
    );
  }

}

export default App;
