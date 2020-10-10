import React from 'react';
import { ChildrenType } from '../../../global';

import './Card.style.scss';

interface IProps {
  children: ChildrenType
}

class Card extends React.Component<IProps> {
  render() {
    return (
      <div className="card">
        {
          this.props.children
        }
      </div>
    );
  }
}

export default Card;