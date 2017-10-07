import React, { Component } from 'react';
import Spinner from './Spinner'

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      titleLoading: true,
    }

    this.contract = this.props.contract;

    this.handleTitleLoad = this.handleTitleLoad.bind(this);
  }

  componentDidMount() {
    this.contract.loadTitle(this.handleTitleLoad);
  }

  render() {
    if(this.state.titleLoading) {
      return <Spinner />;
    }

    return (
      <h1 id="titleContent">{this.state.title}</h1>
    )
  }

  handleTitleLoad(title) {
    this.setState({
      title: title,
      titleLoading: false
    });
  }
}

export default Title;
