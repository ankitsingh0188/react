import React from 'react';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch, NavLink, Redirect } from 'react-router-dom';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Homepage from './components/Homepage';
import CustomForm from './components/practice/form';
import CustomPersonList from './components/api/CustomPersonList';
import CustomPost from './components/api/CustomPost';
import CustomDelete from './components/api/CustomDelete';
import CustomLogin from './components/practice/CustomLogin';
import CustomLogout from './components/practice/CustomLogout';
import CustomChildren from './components/practice/CustomChildren';
import CustomThemedButton from './components/practice/CustomThemedButton';
import ReactImdb from './components/practice/ReactImdb';
import Header from './components/practice/header';
import { isLoggedIn } from './utility';

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

  componentDidMount() {
    // if (!localStorage.getItem('user')) {
    //   this.setState({
    //     storage: false
    //   });
    // }
    // console.log(this.state.storage);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="custom-img"></div>
          <div className="row">
            <Router>
              <Header />
              <Switch>
                <PrivateRoute exact path="/emp" label="Emp" component={CustomPersonList} />
                <PrivateRoute exact path="/update-emp" label="Emp" component={CustomPost} />
                <PrivateRoute exact path="/delete-emp" label="Emp" component={CustomDelete} />
                <LoginRoute exact path="/login" label="Login" component={CustomLogin} />
                <Route exact path="/logout" component={CustomLogout} />
                <Route exact path="/children" component={CustomChildren} />
                <Route exact path="/context" component={CustomThemedButton} />
                <Route exact path="/imdb" component={ReactImdb} />
                <Route exact path="/" render={(props) => (<CustomForm data={this.state.data1} updateParent={this.updateParent} />)} />
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

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

function LoginRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !isLoggedIn() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/emp",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}
export default App;


/* <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p> Edit <code>src/App.js</code> and save to reload. </p>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
            </header>
          </div> */