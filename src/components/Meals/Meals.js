import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import Dishes from './Dishes';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Dishes />
    </Fragment>
  );
};

export default Meals;