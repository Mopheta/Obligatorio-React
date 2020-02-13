import React, { Component } from "react";

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
  }
  
  incrementar = () =>  {
    const { contador } = this.state;
    this.setState({ contador: contador + 1 });
  }

  render() {
    const { msg } = this.props;
    const { contador } = this.state;
    return (
        <div>
            <h2>
            {msg} - {contador}
            </h2>
            <input type="button" value="incrementar" onClick={this.incrementar}/>
       </div>
    );
  }
}

export default Text;
