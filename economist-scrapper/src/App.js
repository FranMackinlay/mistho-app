import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import ArticlesScreen from './screens/ArticlesScreen/ArticlesScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginComponent} />
        <Route path="/articles" component={ArticlesScreen} />
        <Route to="/" component={LoginComponent} />
      </Switch>
    </Router >
  );
}

export default App;
