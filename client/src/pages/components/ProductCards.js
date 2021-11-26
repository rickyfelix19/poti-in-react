import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Box
} from '@mui/material';

import CarDatabase from '../../cars';
import '../stylesheets/ProductCards.scss';

class ProductCards extends Component {
  render() {
    // if availability true show, if not hide
    return (
      <div style={{ marginBottom: '75px' }}>
        {/* mapping */}
        {CarDatabase.cars.map((car, i) => {
          return (
            <div>
              <Card>
                <CardHeader>{car[i]}</CardHeader>
                <Box>
                  <CardMedia>
                    <div>
                      <img
                        src={car.images}
                        alt={car.brand}
                        width="320px"
                        height="245px"
                      />
                    </div>
                  </CardMedia>
                  <CardContent>
                    <div>
                      <Typography>
                        {car.brand}-{car.model}-(y{car.model_year}) <br />
                      </Typography>
                    </div>
                    <div>
                      <Typography>
                        mileage: {car.mileage} <br />
                        fuel: {car.fuel_type} <br />
                        seats: {car.seats} <br />
                        price: {car.price_per_day} <br />
                        {/* availability: {car.availability} */}
                      </Typography>
                      <br /> <br />
                    </div>
                    <div>
                      {/* toggle down */}
                      <Typography>
                        Description:
                        <br /> <br />
                        {car.description}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button>Rent this car</Button>
                  </CardActions>
                </Box>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductCards;
