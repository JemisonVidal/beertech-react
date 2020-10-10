import React, { ChangeEvent, Component } from 'react';

interface IProps {
  label: string,
  type: string,
  placeholder: string,
  value: any,
  onChange: any,
  required?: boolean
}

class Input extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <div className="input-container">
        <label className="label" htmlFor={this.props.label}>{this.props.label}</label>
        <input className="input" id={this.props.label} type={this.props.type} onChange={this.props.onChange} value={this.props.value} required={this.props.required} placeholder={this.props.placeholder} />
      </div>
    )
  }


}

export default Input;