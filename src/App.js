import { React } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import { useState, useEffect } from 'react';
import NavBar from './components/navs/NavBar'


const App = () => {
    const [isLoggedIn, setLogIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        loginStatus()
    }, [])

    const loginStatus = () => {
        axios.get('http://teachers-pet-online-backend.herokuapp.com/logged_in', {withCredentials: true})
        // axios.get('http://localhost:3001/logged_in', {withCredentials: true})
        .then(response => {
            if (response.data.logged_in) {
                handleLogin(response)
            } else {
                handleLogout()
            }
        })
        .catch(error => console.log('api errors:', error))
    }

    const handleLogin = (data) => {
        setLogIn(true)
        setUser(data.user)
    }

    const handleLogout = () => {
        setLogIn(false)
        setUser({})
    }

    return (
        <div>
            <BrowserRouter>
                <Route exact path={['/', '/login', '/signup']} 
                    render={props => (
                    <NavBar {...props} />
                    )}
                />
                <Switch>
                    <Route 
                    exact path='/' 
                    render={props => (
                    <Home {...props} handleLogout={handleLogout} loggedInStatus={isLoggedIn}/>
                    )}
                    />
                    <Route 
                    exact path='/login' 
                    render={props => (
                    <Login {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn}/>
                    )}
                    />
                    <Route 
                    exact path='/signup' 
                    render={props => (
                    <Signup {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn}/>
                    )}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

// home - nav
// login - nav
// signup - nav
// lessons - side nav
// lessons/new - side nav
// students - side nav
// students/new - side nav
// students/edit - side nav
// prepare - mini nav
// present - mini nav
