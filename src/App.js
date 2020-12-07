import React, { useState, useEffect } from 'react';
import Home from './page/Home';
import Detail from './page/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageProfile from './page/PageProfile';
import WaitingPayment from './page/WaitingPayment';
import ListTransaction from './page/ListTransaction';
import PrivateRoute from './compt/PrivateRoute';
import RouteAdmin from './compt/RouteAdmin';
import AdminLogin from './page/AdminLogin';
import AdminHome from './page/AdminHome';
import AddTrip from './page/AddTrip';
import Approvment from './compt/Approvment';
import axios from 'axios';
import { UserContext } from './context/UserContext';


function App() {
  const email = localStorage.getItem("email")
  const [emailState, setEmailState] = useState(email);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState(false);
  const [trip, setTrip] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setLoading(true)
    axios.get(`https://dewetour.herokuapp.com/api/v1/user/${emailState}`).then(res => {
      const user = res.data.data.user
      setUser(user);
      setLoading(false);

    }).catch(err => {
      setUser(false);
      console.log(err);
    });
  }, []);
  useEffect(() => {
    setLoading(true)
    axios.get(`https://dewetour.herokuapp.com/api/v1/user/${emailState}`).then(res => {
      const user = res.data.data.user
      setUser(user);
      setLoading(false);

    }).catch(err => {
      setUser(false);
      console.log(err);
    });
  }, [emailState]);
  useEffect(() => {
    setLoading(true)
    axios.get(`https://dewetour.herokuapp.com/api/v1/user/${emailState}`).then(res => {
      const user = res.data.data.user
      setUser(user);
      setLoading(false);

    }).catch(err => {
      setUser(false);
      console.log(err);
    });
  }, [upload]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://dewetour.herokuapp.com/api/v1/trip")
      .then((res) => {
        const trip = res.data.data;
        setTrip(trip);
        setLoading(false);
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    setLoading(true);
    axios.get("https://dewetour.herokuapp.com/api/v1/trip")
      .then((res) => {
        const trip = res.data.data;
        setTrip(trip);
        setLoading(false);
      })
      .catch((err) => console.log(err))
  }, [total])
  return (
    <div>

      <Router>
        <UserContext.Provider value={{ user, setEmailState, setUser, emailState, upload, setUpload, trip, setTrip, total, setTotal }}>
          <RouteAdmin exact path="/home" component={AdminHome} />
          <RouteAdmin exact path="/addTrip" component={AddTrip} />
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <RouteAdmin exact path="/approvment" component={Approvment} />
          <PrivateRoute exact path="/profile" component={PageProfile} />
          <PrivateRoute exact path="/waitingPayment" component={WaitingPayment} />
          <RouteAdmin exact path="/listTransaction" component={ListTransaction} />
        </UserContext.Provider>
      </Router>

    </div>
  );
}

export default App;
