import React, { Component } from 'react';
import './Footer.style.scss';

interface IProps {

}

class Footer extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <footer className="footer">
        footer
      </footer>
    )
  }
}

export default Footer;