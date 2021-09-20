import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import auth from './hoc/auth'
import MovieInfo from './components/views/MovieInfo/MovieInfo';

function App() {
  return (
      <Router>
          <div>
            <Switch>
              <Route exact path="/" component={auth(LandingPage, null, true)} />
              <Route exact path="/login" component={auth(LoginPage, false)} />
              <Route exact path="/register" component={auth(RegisterPage, false)} />
              <Route exact path="/movie/:movieId" component={auth(MovieInfo, null)} />
            </Switch>
          </div>
      </Router>
  );
}

export default App;
