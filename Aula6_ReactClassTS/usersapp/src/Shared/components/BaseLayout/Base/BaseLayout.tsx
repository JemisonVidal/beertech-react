import React, { Component } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

interface IProps {

}

class BaseLayout extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <>
        <Header />
        <main className="main">
          {this.props.children}
        </main>
        <Footer />
      </>
    )
  }
}

export default BaseLayout;