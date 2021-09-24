import "./App.css";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// pages
import { Elf, Grinch, Home, Vacation } from "./pages";

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
            </Helmet>
            <Routes />
        </div>
    );
}

const Header = () => {
    return (
        <header className="header">
            <ul className="navbar">
                <li className="navbar-item">
                    <Link className="navbar-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/elf">
                        Elf
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/grinch">
                        Grinch
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/vacation">
                        Vacation
                    </Link>
                </li>
            </ul>
        </header>
    );
};

const Routes = () => {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props} />}
                    />
                    <Route
                        exact
                        path="/elf"
                        render={(props) => <Elf {...props} />}
                    />
                    <Route
                        exact
                        path="/grinch"
                        render={(props) => <Grinch {...props} />}
                    />
                    <Route
                        exact
                        path="/vacation"
                        render={(props) => <Vacation {...props} />}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
