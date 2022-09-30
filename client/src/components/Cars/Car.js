import React from 'react'
import { Link } from 'react-router-dom'
import {generateLink, routesConfiguration as routes} from '../../Router/routes'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Car = ({ car }) => {
    return (
        <Card sx={{ width: 300, height: 350, margin: 5 }}>
            <Link to={generateLink(routes.CAR_DETAILS, { id: car.id })} style={{ textDecoration: 'none', color: 'black' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={car.coverImage}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {car.name}
                        </Typography>
                        <Typography gutterBottom variant="h8" component="div">
                            {car.model}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                        Price: {car.price} $
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {car.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}
