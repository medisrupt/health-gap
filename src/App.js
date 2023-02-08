import React from "react";
import { Route, Switch } from "react-router-dom";
// import './App.css';
import routes from "./routes/Index";

function App() {
  return (
    <>
    
    <Switch>
          {routes.map((route, i) => {
            return route.component ? (
              <Route
                key={i}
                exact={true}
                path={route.path}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
    </>
  );
}

export default App;
