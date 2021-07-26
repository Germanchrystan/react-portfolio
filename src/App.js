import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from './components/Main/Main';
import ThankYou from './components/ThankYou/ThankYou';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Main} />
        <Route exact path='/thankyou' component={ThankYou} />
        <Route path='/detail/:id' component={ProjectDetail} />
      </Router>
    </div>
  );
}

export default App;
