import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Homepage from './pages/home';
// import { connect } from 'react-redux';

// import SignUp from '../SignUp';
// import SignIn from '../SignIn';
// import SignOut from '../SignOut';

// import Navbar from './../../components/Navbar';
// import Homepage from  "../../components/Homepage";
// import newTeam from '../newTeam';
// import Teams from '../Team'
// import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Homepage} />
      </Router>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;
