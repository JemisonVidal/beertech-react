import React, { Component } from 'react';
import Input from '../../../../Shared/components/Input/index';
import './InputSearch.style.scss';

interface IProps {
  label: string,
  type: string,
  placeholder: string,
  value: any,
  onChange: any,
  required?: boolean
}

class InputSearch extends Input {
  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <Input {...this.props}></Input>

    )
  }
}

export default InputSearch;