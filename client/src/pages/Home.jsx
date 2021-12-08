import React, { Component, useState } from 'react';
import { Container } from '@mui/material';

import CarDatabase from '../cars';
import { ProductCards } from './components/ProductCards';
import { NotificationBox } from './components/NotificationBox';

export default function Home() {
  const [isExpanded, setIsExpanded] = React.useState(false); // expand
  const [isSelected, setIsSelected] = React.useState(false); // select
  const [isNotified, setIsNotified] = React.useState(false); // notification

  // more desciprtion button
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

  // notification received
  const handleNotificationOpen = () => {
    setIsNotified(true);
    // severity: success or caution
  };

  // notification close
  const handleNotificationClose = () => {
    setIsNotified(false);
  };

  // error announcement when no selection is made
  const handleNotificationError = () => {
    setIsNotified(true);
    // severity: warning
  };
  return (
    <Container sx={{ marginTop: '30px', marginBottom: '110px' }}>
      {CarDatabase.cars.map((car, i) => {
        if (car.availability === true) {
          return <ProductCards />;
        }
      })}
    </Container>
  );
}
