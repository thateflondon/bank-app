import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Pricing from "./components/Pricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/pricing" component={Pricing} exact />
      </Switch>
      {/* <Home /> */}
    </Router>
  );
}

export default App;
