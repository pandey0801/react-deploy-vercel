import { Fragment } from "react";

import MealSummar from "./MealSummar";
import AvailableMeals from "./AvailableMeals";

const Meals = () =>
{
    return(
       <Fragment>
        <MealSummar/>
        <AvailableMeals/>
       </Fragment>
    );
}
 export default Meals;