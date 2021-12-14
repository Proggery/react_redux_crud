import { Switch, Route } from "react-router-dom";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
