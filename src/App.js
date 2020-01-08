  import React, { Component } from 'react'
  import './App.css';
  

  import NavBar from "./component/NavBar/NavBar";
  import { useAuth0 } from "./react-auth0-spa";

  import Profile from "./component/Profile";
  import history from "./utils/history";
  import PrivateRoute from "./component/PrivateRoute";

  import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
  import Home from './pages/Home';
  import About from './pages/About';
  import Order from './pages/Order';
  import OrderOne from './pages/OrderOne';
  import Contact from './pages/Contact';
  import CustomeNavBar from './pages/CustomeNavBar'
  import Footer from './pages/Footer'
  import SigninAndSignupPage from './pages/SigninAndSignupPage/SigninAndSignout'
  import Layout from './component/layout'


  function App() {
    const { loading } = useAuth0();

    if (loading) {
      return <div>Loading...</div>;
    }

  


      return (
          <React.Fragment>
     
          <CustomeNavBar/>
          <Layout>
          <Router history={history}>
       
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/order" component={Order} />
            <Route path="/orderone" component={OrderOne} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={SigninAndSignupPage} />
            <PrivateRoute path="/profile" component={Profile} />
            </Switch>
            </Router>
            </Layout>
            <Footer/>
       
        </React.Fragment>
      )
    }


  export default App;










