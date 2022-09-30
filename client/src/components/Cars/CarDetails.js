import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarDetails } from '../../redux/actions/cars/cars'
import CardMedia from '@mui/material/CardMedia';

export default function CarDetails(props) {
    const dispatch = useDispatch()
    //const history = useHistory()
    const car = useSelector(state => state.cars.car)
    const carDetailsLoading = useSelector(state => state.cars.carDetailsLoading)

    useEffect(() => {
        const { id } = props.match.params
        //console.log("aaaaaaaaaaa")
        dispatch(getCarDetails(id))
    }, [dispatch, props])
  return (
    <div>
        <CardMedia
            component="img"
            height="140"
            image={car.image}
            alt="green iguana"
        />
        <p>{car.name}</p>
        <p>{car.model}</p>
        <p>{car.price}$</p>
        <p>{car.description}</p>
    </div>
  )
}
