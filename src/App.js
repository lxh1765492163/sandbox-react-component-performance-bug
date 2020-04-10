import React from "react";
import "./styles.css";

class B extends React.PureComponent {
  render() {
    const data = this.props.data;
    return data.map((key, index) => {
      return <div key={index}>{key}</div>;
    });
  }
}

export default class A extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1]
    };
  }
  componentDidMount() {
    setTimeout(() => {
      const { data } = this.state;
      data.push(2);
      console.log("---", data);
      this.setState({
        data
      });
    }, 2000);
  }
  render() {
    return <B data={this.state.data} />;
  }
}
