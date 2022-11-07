import Home from "./pages/home";
import Item from "./pages/item";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/item/:id">
            <Item />
          </Route>

        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
