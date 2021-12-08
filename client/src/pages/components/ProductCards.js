import React from 'react';
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

// import CarDatabase from '../../cars';

import { styled } from '@mui/material/styles';
import '../stylesheets/ProductCards.scss';
import PropTypes from 'propTypes';

export const ProductCards = ({
  image,
  title,
  details,
  moreDesc,
  openDesc,
  closeDesc,
  selectButton
}) => {
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
        {
          <Card
            sx={{
              Width: '300px',
              Height: '500px'
            }}
          >
            {/* <CardHeader>{car[i]}</CardHeader> */}
            {/* Image */}
            <CardMedia component="img" src={image} alt={title} />

            {/* Details */}
            <CardContent>
              {title}
              <br />
              {details}
              <br />
              {/* Button */}
              <CardActions
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex'
                }}
              >
                <Button variant="contained" onClick={selectButton}>
                  Select
                </Button>
              </CardActions>
              {/* Descriptions */}
              <CardActions>
                <ExpandMore
                  // key={car.id}
                  // car={car}
                  // expand={expanded}
                  onClick={openDesc}
                  onClose={closeDesc}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={closeDesc} timeout="auto" unmountOnExit>
                {moreDesc}
              </Collapse>
            </CardContent>
          </Card>
        }
      </Box>
    </div>
  );
};

ProductCards.propTypes = {
  image: PropTypes.image.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  moreDesc: PropTypes.string.isRequired,
  openDesc: PropTypes.boolean.isRequired,
  closeDesc: PropTypes.boolean.isRequired,
  selectButton: PropTypes.boolean.isRequired
};
