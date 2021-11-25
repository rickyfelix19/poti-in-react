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

import carDatabase from '../../cars';

class ProductCards extends Component {
  render() {
    return (
      <div style={{ marginBottom: '75px' }}>
        {/* mapping */}
        {carDatabase.cars.map((car) => {
          return (
            <div>
              <Card>
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
                <p>
                  <CardHeader>
                    brand = {car.brand} <br />
                    model = {car.model} <br />
                    year = {car.model_year} <br />
                  </CardHeader>
                  <CardContent>
                    mileage = {car.mileage} <br />
                    fuel = {car.fuel_type} <br />
                    seats = {car.seats} <br />
                    price = {car.price_per_day} <br />
                    {/* availability = {car.availability} <br /> */}
                    description = {car.description} <br />
                  </CardContent>
                </p>
                <CardActions>
                  <Button>Rent</Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductCards;
