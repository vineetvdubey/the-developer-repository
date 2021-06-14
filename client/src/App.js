import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from './components/ListPage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile/:id" component={ProfilePage} />
        <Route exact path="/" component={ListPage} />
      </Switch>
    </Router>
  );
}

export default App;
