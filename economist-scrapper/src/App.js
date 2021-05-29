import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import LoginComponent from './components/LoginComponent/LoginComponent';
import ArticleScreen from './screens/ArticleScreen/ArticleScreen';
import ArticlesScreen from './screens/ArticlesScreen/ArticlesScreen';

function App() {
  return (
    <div>
      <header className="row navbar fm-df fm-jucst fm-ml-2 fm-mt-2">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/The_Economist_Logo.svg/1200px-The_Economist_Logo.svg.png" alt="" />
      </header>
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
