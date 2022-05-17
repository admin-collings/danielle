import Home from "./pages/home";
import Item from "./pages/item";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/item/:id">
          <Item />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
