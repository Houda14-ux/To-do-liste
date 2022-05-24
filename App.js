import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TodoList from './Todo/TodoList';
import { Component } from 'react';

class App extends Component {
  render() {//render =afficher
    return (
      <TodoList/>
    );
  }
}

export default App;