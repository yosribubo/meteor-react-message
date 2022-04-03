import React from 'react'

// Routing imports
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom'

// Component imports
import SignInPage from './pages/signInPage'
import SignUpPage from './pages/signUpPage'
import { MessageList } from './pages/messageList'

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/signIn' component={ SignInPage } />
            <Route exact path='/signUp' component={ SignUpPage } />
            <Route exact path='/messagelist' component={ MessageList } />
            
            <Redirect from='*' to ='/signIn' />
        </Switch>
    </BrowserRouter>
)

export default AppRoutes