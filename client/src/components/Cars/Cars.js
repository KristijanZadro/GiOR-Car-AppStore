import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../../redux/actions/cars/cars';
import { Car } from './Car';
import './Cars.css'

export default function Cars() {
    const dispatch = useDispatch()
    const cars = useSelector(state => state.cars.cars)

    useEffect(() => {
        dispatch(getCars())
    }, [dispatch])

    const carsRender = cars.map(car => {
        return (
            <div key={car.id}>
                <Car
                    car={car}
                />
            </div>

        )
    })

    return (
        <div className="carsContainer">
            <div className="carsList">
                {carsRender}
            </div>
        </div>
    )
}
