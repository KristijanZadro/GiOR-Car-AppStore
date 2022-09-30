import React from 'react'
import { Switch } from 'react-router-dom'
import CarDetails from '../components/Cars/CarDetails'
import Cars from '../components/Cars/Cars'
import PrivateRoute from './PrivateRoute'

const Router = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute path="/cars/:id" component={CarDetails} />
                <PrivateRoute path="/cars" component={Cars} />
            </Switch>
        </div>
    )
}

export default Router
