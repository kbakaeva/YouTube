import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Watch from './Watch/watch'
import Home from './Home/home'
import Search from './Search/search'

export default function Main() {
    return (
        <div>
        <BrowserRouter >
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/watch/:id' exact component={Watch}/>
            </Switch>
        </BrowserRouter>

        </div>
    )
}