import React from 'react'
import MealSummary from './MealSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
    <React.Fragment>
        <MealSummary/>
        <AvailableMeals/>
    </React.Fragment>
  )
}

export default Meals