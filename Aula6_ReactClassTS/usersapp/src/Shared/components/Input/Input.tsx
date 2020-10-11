import React, { Component } from 'react';
import './Input.style.scss';

interface IProps {
  label: string,
  type: string,
  placeholder: string,
  value: any,
  required?: boolean
  onChange: any,
  onKeyUp?: any,
}

class Input extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <div className="input-container">
        <input
          id={this.props.label}
          className="input"
          type={this.props.type}
          value={this.props.value}
          pattern=".+"
          required={this.props.required ? this.props.required : false}
          onChange={this.props.onChange}
          onKeyUp={this.props.onKeyUp}
          placeholder="Search"
        />
        <label className="label" htmlFor={this.props.label}>Users</label>
      </div>
    )
  }
}

export default Input;