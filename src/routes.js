import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Main } from './pages/Main/Main'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
                <Redirect to="/" /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Router