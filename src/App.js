import React, { Component } from 'react';
import NavBar from './top_bar';
import UsersBox from './users_box';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
              <NavBar/>
              <UsersBox />
            </div>
      
        );
    }
}

export default App;
