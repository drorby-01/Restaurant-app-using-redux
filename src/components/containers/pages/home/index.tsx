import React, { useContext, useEffect } from "react";
import axios from "axios";
import Meal, { IMeal } from "components/ui-components/meal";
import { addMealAction, getMealsFromServerDone } from "store/meals.actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import  {Bag,Search} from "react-bootstrap-icons"
import {useHistory} from "react-router-dom"

export default function HomePage() {
  const meals = useSelector((state: any) => state.mealsReducer.meals);
  const dispatch = useDispatch();

  

  async function getRecipesApi() {
    try {
      const result = await axios.get("http://localhost:5200/meals");
      dispatch(getMealsFromServerDone(result.data));
    } catch (ex) {}
  }
  //action(props)
  function addMeal(meal: IMeal) {
    dispatch(addMealAction(meal));
  }
  useEffect(() => {
    getRecipesApi();
  }, []);
  if (!meals) return <span> No Meals </span>;
  return (
    <div className="row">
      {meals.map((meal: any) => {
        return (
          <Meal
            key={meal.name}
            actionTitle="Order Now"
            {...meal}
            action={addMeal}
            actionComponent={<AddToCart {...meal}/>}
          />
        );
      })}
    </div>
  );
}


function AddToCart(props:IMeal){
  const history = useHistory();
  const dispatch = useDispatch()
  const state = useSelector((state:any) => state.mealsReducer.orders)
  function addOrder(){
    dispatch(addMealAction(props))
  }


return (<>
  <Button onClick={addOrder}>
    <Bag/>
  </Button>
  <Button className="ml-2" onClick={()=>history.push(`/meal/${props.name}`)}>
    <Search/>
  </Button>
  </>
)
}