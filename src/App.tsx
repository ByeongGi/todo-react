import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/store';
import { add, remove } from './todo/actions/todo.actions';



console.log(
  store.dispatch(add('TTTTT')),
  store.getState(),
  store.dispatch(remove(store.getState().todoFeature.todos[0].id)),
  store.getState(),
  
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> 
 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
