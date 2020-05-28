import React from 'react';
import './Styles/main.scss'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from './route/route'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './Screens/Home';
// import Detail from './Screens/Detail';
// import DetailItem from './Screens/DetaiItem';
// import Signin from './Screens/Signin';
// import Login from './Screens/Login';
// // import DetailContent from './Layout/DetailContent/DetailContent';
// import DetailCart from './Screens/DetailCart';
// import Info from './Screens/Info';
// import Admin from './Screens/Admin';




export default class App extends React.Component {

  render() {
    return (
      <Router>
        {this.showRoutes(routes)}
      </Router>
    )
  }
  showRoutes = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, i) => {
        return <Route path={route.path} exact={route.exact} component={route.main} key={i} />
      })
    }
    return <Switch>{result}</Switch>
  }
}
// export default App;
