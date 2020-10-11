import React from 'react';
import Card from '../../Shared/components/Card'
import APIService from '../../Services/APIService'
import Axios from '../../Services/AxiosHandler'
import InputSearch from '../../Pages/Users/Components/InputSearch/index'
import StoreContext from '../../Shared/Store/StoreContext'
import User from "../../Repository/User";

interface IState {
  name: string
}

class UserPage extends React.Component<{}, IState> {
  static contextType = StoreContext

  public state: IState = {
    name: ""
  }

  private getUsers = async () => {
    const axiosHandler = new Axios();
    return await new APIService(axiosHandler).getUsers();
  }

  async componentDidMount() {
    const users = await this.getUsers();
    if (users) {
      const { setData } = this.context
      setData(users.data)
    }
  }

  private renderUser = () => {
    const data = this.context.data as User[]
    const setData = this.context.setData

    if (data.length <= 0) {
      return null;
    }

    return data.map((user) => {
      const { id, name, email, address } = user;
      return (
        //TODO: Passar o objeto user para o component Card
        <Card key={id}>
          <div>{`Name: ${name}`}</div>
          <div>{`Email: ${email}`}</div>
          <div>{`Street: ${address.street}`}</div>
          <div>{`Suite: ${address.suite}`}</div>
          <div>{`City: ${address.city}`}</div>
          <div>{`Zipcode: ${address.zipcode}`}</div>
        </Card>
      )
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <InputSearch label="InputSearch" type="text" placeholder="Name" value={this.state.name} onChange={this.HandleChangeName}></InputSearch>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {
              this.renderUser()
            }
          </div>
        </div>
      </div>
    )
  }

  private HandleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, name: event.target.value })
  }
}

export default UserPage;