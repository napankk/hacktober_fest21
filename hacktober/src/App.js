import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './page/home';
import About from './page/about'
import './css/home.css'
import Coffee from './page/coffe';
import SlytherinNavbar from './page/slytherin';
import GryffindorNavbar from './page/gryffindor';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/coffe/:type" exact component={Coffee} />
        <Route path="/slytherin" exact component={SlytherinNavbar} />
        <Route path="/gryffindor" exact component={GryffindorNavbar} />
      </Switch>
    </div>
  );
}

export default App;
