import React, { useContext } from "react";
import Meal, { IMeal } from "components/ui-components/meal";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import {Trash2} from "react-bootstrap-icons"
import {useSelector,useDispatch} from "react-redux"
import {removeMealAction,removeAllMealsAction} from "store/meals.actions"


export default function OrdersPage() {
  
  const orders:Array<IMeal> = useSelector((state:any)=>state.mealsReducer.orders)
  const dispatch = useDispatch();
  
  function getTotalCal() {
    const total = orders.reduce((total: number, order: any) => {
      console.log(parseInt(order.calories));
      if (isNaN(parseInt(order.calories))) return total;
      return total + parseInt(order.calories);
    }, 0);
    return total;
  }

  function removeMeal(meal: IMeal) {
    const ordersWithoutDeleteMeal = orders.filter(
      (order: IMeal) => order.name !== meal.name
    );
      dispatch(removeMealAction(ordersWithoutDeleteMeal))
  }
  return (
    <div>
      <h1 className="jumbotron"> Orders </h1>

      <div className="row">
        <div className="col-lg-3">
          <h2>
            Total Price: <Badge variant="secondary">{getTotalCal()} Cal</Badge>
          </h2>
        </div>
        <div className="col-lg-3 float-right pull-right">
          <Button
            className={"pull-right"}
            onClick={() => {
              dispatch(removeAllMealsAction())
            }}
            variant="danger"
            size="lg"
            active
          >
            Clear Orders
          </Button>
        </div>
      </div>
      <div className="row">
        {orders.map((meal: IMeal,index:number) => {
          return (
            <Meal
              {...meal}
              cls="danger"
              actionTitle="Remove"
              action={removeMeal}
              actionComponent={<RemoveOrder {...meal}  />}
            />
          );
        })}
      </div>
    </div>
  );
}

function RemoveOrder(props:any){
  const dispatch = useDispatch()
  const orders = useSelector((state:any)=>state.mealsReducer.orders)
  function removeOrder(){
 
    const ordersRemoveArray = orders.filter((element:any)=>element.name !== props.name)
    dispatch(removeMealAction(ordersRemoveArray))
    
  }

  return <Button variant="danger" onClick={removeOrder}>
      <Trash2/>
  </Button>
}