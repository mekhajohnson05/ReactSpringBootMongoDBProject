
import './App.css';
import React  from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FormComponent from './component/FormComponent';




class App extends React.Component {
  render() {
     return(
      <div className="App">
         <Router><div className="container">
                           <Switch> 
                              <Route path = "/" exact component = {FormComponent}></Route>
                           </Switch>
                  </div>
         </Router>
      </div>  

     )
     
  }
}

export default App;
