import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ArticleScreen from './screens/ArticleScreen/ArticleScreen';
import ArticlesScreen from './screens/ArticlesScreen/ArticlesScreen';

function App() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/articles" component={ArticlesScreen} />
          <Route path="/article/:articleSlug" component={ArticleScreen} />
          <Route to="/" component={LoginComponent} />
        </Switch>
      </Router >
    </div>
  );
}

export default App;
