import React, { useState } from 'react';
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
import { useButton } from '@mui/base/ButtonUnstyled';

import { grid, flexbox } from '@mui/system';

import CarDatabase from '../../cars';

import { styled } from '@mui/material/styles';
import '../stylesheets/ProductCards.scss';

export default function ProductCards() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);

  const handleExpandClick = (i) => {
    setIsSelected((isExpanded) => (setIsExpanded === i ? null : i));

    // let { expanded } = this.state;
    // setExpanded(!expanded);
    // this.setState({
    //   expanded: {
    //     ...expanded,
    //     [index]: !expanded[index]
    //   }
    // });
  };

  // error announcement when no selection is made

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

          if (car.availability === true) {
            // only map cars that is available
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
                    <Button
                      variant="contained"
                      onClick={() => setIsSelected(!isSelected)}
                    >
                      Select
                    </Button>
                  </CardActions>

                  {/* Descriptions */}
                  <CardActions>
                    <ExpandMore
                      key={car.id}
                      car={car}
                      // expand={expanded}
                      setActive={setIsExpanded}
                      isActive={isExpanded === i}
                      onClick={() => setIsExpanded(i)}
                      aria-expanded={isExpanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Typography> Description: {car.description}</Typography>
                  </Collapse>
                </CardContent>
              </Card>
            );
          }
        })}
      </Box>
    </div>
  );
}
