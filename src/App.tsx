import React, {Component} from 'react';
import { withApp, PixiAppProperties, Stage} from "react-pixi-fiber";
import './App.css';
import Bunny from "./components/Bunny";

const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: window.innerWidth,
  height: window.innerHeight
};

const style = {
  width: window.innerWidth,
  height: window.innerHeight
};

class App extends Component<PixiAppProperties> {
    public readonly state:any = {
        rotation: 0
    };

    componentDidMount() {
        if (this.props.app)
          this.props.app.ticker.add(this.animate);
    }

    componentWillUnmount() {
      if (this.props.app)
          this.props.app.ticker.remove(this.animate);
    }

    private animate = function (delta:any) {
        // just for fun, let's rotate mr rabbit a little
        // delta is 1 if running at 100% performance
        // creates frame-independent tranformation
        this.setState(state => ({
            ...state,
            rotation: (state as any).rotation + 0.1 * delta
        }));
        console.log();
    }.bind(this);

    render() {
        return (
          <Stage options={options} style={style}>
            <Bunny rotation={this.state.rotation}  x={window.innerWidth / 2} y={window.innerHeight / 2} />
          </Stage>
        )
    }
}

export default withApp(App);
