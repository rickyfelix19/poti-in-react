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
  constructor(props) {
    super(props);

    this.state = {
      cars: {}
    };
  }
  render() {
    return (
      <div>
        {/* mapping */}
        {carDatabase.cars.map((car) => {
          return (
            <Box>
              <Card>
                <CardMedia>
                  <div>
                    <img src={car.images} alt={car.brand} />
                  </div>
                </CardMedia>
                <p>
                  <CardHeader>
                    brand= {car.brand} <br />
                    model= {car.model} <br />
                    year= {car.model_year} <br />
                  </CardHeader>
                  <CardContent>
                    mileage= {car.mileage} <br />
                    fuel= {car.fuel_type} <br />
                    seats= {car.seats} <br />
                    price= {car.price_per_day} <br />
                    availability= {car.availability} <br />
                    description= {car.description} <br />
                  </CardContent>
                </p>
                <CardActions>
                  <Button>Rent</Button>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </div>
    );
  }
}

export default ProductCards;
