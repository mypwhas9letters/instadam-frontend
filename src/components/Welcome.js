import React from 'react'
import {Layer, Rect, Stage, Group} from 'react-konva';



class Welcome extends React.Component {
  state = { color: 'green' };

  handleClick = () => {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      color: window.Konva.Util.getRandomColor()
    });
  }

  render() {
    const width = window.innerWidth
    const height = window.innerHeight
    return (
      <Stage width={width} height={height}>
        <Layer>
          <Rect
            width={width}
            height={height}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}/>
        </Layer>
      </Stage>

    );
  }
}

export default Welcome
