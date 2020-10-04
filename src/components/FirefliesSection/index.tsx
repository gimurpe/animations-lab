import React from 'react';
import './styles.scss';
import FireFly from '../FireFly';

const FirefliesSection = () => {
  let fireflies = new Array(15);
  fireflies = fireflies.fill({}, 0, 15);
  return (
    <>
      {fireflies.map(() => (
        <FireFly />
      ))}
    </>
  );
};

export default FirefliesSection;
