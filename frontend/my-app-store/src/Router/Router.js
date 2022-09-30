import React from 'react'
import { Switch } from 'react-router-dom'
import { Cars } from '../Cars/Cars'
import PrivateRoute from './PrivateRoute'

const Router = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute path="/cars" component={Cars} />
            </Switch>
        </div>
    )
}

export default Router
