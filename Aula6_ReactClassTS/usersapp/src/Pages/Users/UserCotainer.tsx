import React from 'react';
import Card from '../../Shared/components/Card'
import Input from '../../Shared/components/Input'
import APIService from '../../Services/APIService'
import Axios from '../../Services/AxiosHandler'
import IUsers from '../../Interfaces/IUsers'

interface IState extends IUsers {
  name: string
}

class UserPage extends React.Component<{}, IState> {
  public state = {
    name: "",
    data: []
  }

  private getUsers = async () => {
    const axiosHandler = new Axios();
    return await new APIService(axiosHandler).getUsers();
  }

  async componentDidMount() {
    const users = await this.getUsers();
    if (users) this.setState({ ...this.state, data: users.data })
  }

  private renderUser = () => {
    const { data } = this.state;

    if (data.length <= 0) {
      return null;
    }



    return data.map((user, index) => {
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
    this.setState({ ...this.state, name: event.target.value })
  }

}

export default UserPage;