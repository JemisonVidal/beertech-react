import React, { Component } from 'react'
import StoreContext from './StoreContext'
import User from "../../Repository/User";

interface IState {
  data: User[]
}

class ProviderContext extends Component<{}, IState> {

  public state: IState = {
    data: []
  }

  private setData = (data: User[]) => {
    this.setState({ data })
  }

  render() {
    const { children } = this.props
    const { data } = this.state
    const { setData } = this

    return (
      <StoreContext.Provider value={{ data, setData }}>
        {children}
      </StoreContext.Provider>
    )
  }
}

export default ProviderContext;