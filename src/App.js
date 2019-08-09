import React from 'react';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch, NavLink } from 'react-router-dom';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Homepage from './components/Homepage';
import CustomForm from './components/practice/form';
import CustomPersonList from './components/api/CustomPersonList';
import CustomPost from './components/api/CustomPost';
import CustomDelete from './components/api/CustomDelete';

// const client = new ApolloClient({
//   uri: 'http://127.0.0.1:8888/graphql'
// })

// If route is not available.
let NoRouteFound = () => {
  return (
    <div>
      <Alert color="danger">404 - Page not found!</Alert>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: 'HELLO',
      data2: {
        name: 'john',
        age: 40
      }
    }
  }

  updateParent = (data) => {
    this.setState({
      data1: data
    })
  }

  render() {
    return (
      // <ApolloProvider client={client}>
      <>
        <div className="container">
          <div className="custom-img"></div>
          <div className="row">
            <Router>
              <nav>
                <NavLink exact activeClassName="nav-item-active" to="/">Home</NavLink>
                <NavLink exact activeClassName="nav-item-active" to="/emp">Emp</NavLink>
                <NavLink exact activeClassName="nav-item-active" to="/update-emp">Add Emp</NavLink>
                <NavLink exact activeClassName="nav-item-active" to="/delete-emp">Delete Emp</NavLink>
              </nav>
              <Switch>
                <Route exact path="/" render={(props) => (<CustomForm data={this.state.data1} updateParent={this.updateParent} />)} />
                <Route exact path="/emp" component={CustomPersonList} />
                <Route exact path="/update-emp" component={CustomPost} />
                <Route exact path="/delete-emp" component={CustomDelete} />
                <Route exact component={NoRouteFound} />
              </Switch>
            </Router>
            {/* <CustomForm person={this.state.data2} updateParent={this.updateParent} />
            <Test data={this.state.data1} /> */}
            {/* <CustomPersonList /> */}
          </div>
        </div >
      </>
      // </ApolloProvider>
    );
  }
}

export default App;


/* <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p> Edit <code>src/App.js</code> and save to reload. </p>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
            </header>
          </div> */