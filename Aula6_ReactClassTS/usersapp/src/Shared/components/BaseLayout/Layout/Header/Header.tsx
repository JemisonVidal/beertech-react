import React, { Component } from 'react';
import './Header.style.scss';

interface IProps {

}

class Header extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <header className="header">
        <p>Legalize Your Trip
          <br />
          <span>Hotels App</span>
        </p>
      </header>
    )
  }
}

export default Header;