import React, { Component } from 'react';
import Input from '../../../../Shared/components/Input/index';
import StoreContext from '../../../../Shared/Store/StoreContext'
import './InputSearch.style.scss';

interface IProps {
  label: string,
  type: string,
  placeholder: string,
  value: any,
  onChange: any,
  required?: boolean,
  fieldFilter: string
}

class InputSearch extends Component<IProps> {
  static contextType = StoreContext

  constructor(props: IProps) {
    super(props)
  }

  render() {
    const { data, setData } = this.context
    return (
      <Input {...this.props} onKeyUp={this.handleKeyUp}></Input>
    )
  }

  private handleKeyUp(event: React.ChangeEvent<HTMLInputElement>) {

  }
}

export default InputSearch;