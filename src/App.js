import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";



// Create context object
export const AppContext = React.createContext();

// Set up Initial State
const initialState = {

    userName: '',

};

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE_INPUT':
            return {
                userName: action.data
            };


        default:
            return initialState;
    }
}
  function App()
    {
  
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={route?.isExact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
        </Router>
        </AppContext.Provider>
    );
}

export default App;
