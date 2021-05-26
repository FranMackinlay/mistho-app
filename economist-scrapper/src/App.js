import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginComponent} />
        <Route to="/" component={LoginComponent} />
      </Switch>
    </Router >
  );
}

export default App;
