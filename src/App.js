import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";
import Card from "./components/Card/Card";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import useAuth from "./hooks/useAuth";

export default function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <div className="App">
      <h1>Hello</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/card">Card</Link>
          </li>
        </ul>
        {isAuth ? (
          <>
            <div className="authMessage">Log Out</div>
            <button className="buttons" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="authMessage">Log In</div>
            <button className="buttons" onClick={login}>
              Login
            </button>
          </>
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute auth={isAuth} path="/account" component={Account} />
          <Route path="/card" component={Card} />
        </Switch>
      </Router>
    </div>
  );
}
