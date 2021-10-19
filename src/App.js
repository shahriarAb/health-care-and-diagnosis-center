import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Aboutus from './pages/Aboutus/Aboutus';
import Appoinment from './pages/Appoinment/Appoinment';
import AuthProvider from './pages/Context/AuthProvider';
import Doctors from './pages/Doctors/Doctors';
import Home from './pages/Home/Home/Home';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Services from './pages/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Login from './pages/User/Login/Login';
import Signup from './pages/User/Signup/Signup';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/servicedetails/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/appoinments">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path="/ourdoctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/aboutus">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
