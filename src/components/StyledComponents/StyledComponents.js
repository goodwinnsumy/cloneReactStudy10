import React from 'react';
import {Button, TextDiv, Title} from './styles';
import ColorText from "../ColorText/ColorText";


class StyledComponents extends React.Component {

  state = {
    isChangedColor: false
  }

  render() {
    return (
      <div>
        <TextDiv >
            <p>asgasfgsrgs</p>
            <ColorText text={"Color text"} color={"red"} />
        </TextDiv>

        <Title isChanged={false}>
          StyledComponents
        </Title>

        <Button onClick={() => this.setState({ isChangedColor: !this.state.isChangedColor })}>
          Change title color
        </Button>
      </div>
    )
  }
}

export default StyledComponents;