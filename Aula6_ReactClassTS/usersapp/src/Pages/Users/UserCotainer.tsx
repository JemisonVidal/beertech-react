import React from 'react';
import Card from '../../Shared/components/Card'
import Input from '../../Shared/components/Input'
import APIService from '../../Services/APIService'
import Axios from '../../Services/AxiosHandler'
//import Users from '../../Interfaces/IUsers'

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Users {
  name: String,
  id: number,
  username: String,
  email: String,
  address: Address
}

interface IState {
  name: string,
  users: Users[]
}

class UserPage extends React.Component<IState> {
  public state = {
    name: '',
    users: []
  }

  private getUsers = async () => {
    const axiosHandler = new Axios();
    return await new APIService(axiosHandler).getUsers();
  }

  async componentDidMount() {
    //this.getUsers().then(response => this.setState({ users: response }));
    const users = await this.getUsers();
    if (users) this.setState({ users: users })
  }

  private renderUser = () => {
    const { users } = this.state;

    if (users.length <= 0) {
      return null;
    }

    console.log(users)
    const test = [{
      name: "teste1"
    }]

    return test.map((user, index) => {
      const { name } = user;
      return (
        <Card key={index}>
          <div>{`Name: ${name}`}</div>
        </Card>
      )
    });

  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Input label="name" type="text" placeholder="Name" value={this.state.name} onChange={this.HandleChangeName}></Input>
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
    this.setState({ name: event.target.value })
  }

}

export default UserPage;