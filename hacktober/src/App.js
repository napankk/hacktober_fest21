import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './page/home';
import About from './page/about'
import './css/home.css'
import SlytherinHouse from './page/slytherin';
import GryffindorNavbar from './page/gryffindor';
import HufflepuffHouse from './page/hufflepuff';
import RavenclawHouse from './page/ravenclaw';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/slytherin" exact component={SlytherinHouse} />
        <Route path="/gryffindor" exact component={GryffindorNavbar} />
        <Route path="/hufflepuff" exact component={HufflepuffHouse} />
        <Route path="/ravenclaw" exact component={RavenclawHouse} />
      </Switch>
    </div>
  );
}

export default App;
