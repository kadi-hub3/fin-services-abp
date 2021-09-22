import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import SignIn from "./pages/signin";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
