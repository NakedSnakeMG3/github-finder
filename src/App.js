import React, { Component } from 'react';
import './App.css';
import Navbar  from './components/layout/Navbar';
import Users  from './components/users/Users';
import  axios from 'axios';

class App extends Component {

  state = {
    users: [],
    loading: false,
  }

  async componentDidMount() {
    this.setState({loading: true});
    const resp =  await axios.get('https://api.github.com/users');
    this.setState({users: resp.data, loading: false})
    console.log(resp.data);
  }

  render() {  

    return (
      <div className="App">
        <Navbar icon="fa fa-github" title="Github Finder" />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  };
}

export default App;
