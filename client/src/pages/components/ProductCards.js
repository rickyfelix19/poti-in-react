import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Box
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';

import { grid, flexbox } from '@mui/system';

import CarDatabase from '../../cars';

import { styled } from '@mui/material/styles';
import '../stylesheets/ProductCards.scss';

const ExpandMore = styled((props) => {
  // to expand more description
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

// to check if item is available

export default function ProductCards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          columnGap: 3,
          rowGap: 2
        }}
      >
        {/* mapping */}
        {CarDatabase.cars.map((car, i) => {
          return (
            <Card
              sx={{
                Width: '300px',
                Height: '500px'
              }}
            >
              <CardHeader>{car[i]}</CardHeader>
              {/* Image */}
              <CardMedia component="img" src={car.images} alt={car.brand} />

              {/* Details */}
              <CardContent>
                <Typography>
                  {car.brand} {car.model}
                  <br />
                  (y.{car.model_year})
                </Typography>
                <Typography>
                  <br />
                  mileage: {car.mileage} <br />
                  fuel: {car.fuel_type} <br />
                  seats: {car.seats} <br />
                  price: {car.price_per_day} <br />
                  {/* availability: {car.availability} */}
                </Typography>
                <br />

                {/* Button */}
                <CardActions
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex'
                  }}
                >
                  <Button>Rent This Car</Button>
                </CardActions>

                {/* Descriptions */}
                <CardActions>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography> Description: {car.description}</Typography>
                </Collapse>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}
